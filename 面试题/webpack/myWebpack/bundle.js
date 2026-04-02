const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const path = require('path')
const babel = require('@babel/core')


const getModuleInfo = (file) => {
  const body = fs.readFileSync(file, 'utf-8')
  const ast = parser.parse(body, {
    sourceType: 'module'  // 告诉babel我们要解析的是ESModule模块
  })

  const deps = {}  // 依赖收集  {'./add.js': './src/add.js', xxxx}
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file)
      const abspath = './' + path.join(dirname, node.source.value)
      deps[node.source.value] = abspath
    }
  })

  // 代码转换
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })

  const moduleInfo = { file, deps, code }
  return moduleInfo
}

// 递归获取依赖
const parseModules = (file) => {  // 尾递归
  const entry = getModuleInfo(file)
  const temp = [entry]
  for (let i = 0; i < temp.length; i++) {
    const deps = temp[i].deps
    if (deps) {
      for (const key in deps) {   // './add.js': './src/add.js'
        if (deps.hasOwnProperty(key)) {
          temp.push(getModuleInfo(deps[key]))
        }
      }
    }
  }

  const depsGraph = {}
  temp.forEach((item) => {
    depsGraph[item.file] = {
      deps: item.deps,
      code: item.code
    }
  })
  // console.log(depsGraph);
  return depsGraph
}

const bundle = (file) => {
  const depsGraph = JSON.stringify(parseModules(file))

  return `(function (graph) {
    function require(file) {
      function absRequire(relPath) {
        return require(graph[file].deps[relPath])
      }
      var exports = {};

      (function (require, exports, code) {
        eval(code)
      })(absRequire, exports, graph[file].code)

      return exports
    }
    require('${file}')
  })(${depsGraph})`
}



const content = bundle('./src/index.js')
// console.log(content);

fs.mkdirSync('./dist')
fs.writeFileSync('./dist/main.js', content)



// "use strict";
// 'var _add = _interopRequireDefault(require("./add.js"));\n' +
//   'var _minus = require("./minus.js");\n' +
//   'function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }\n' +
//   'var sum = (0, _add["default"])(1, 2);\n' +
//   'var division = (0, _minus.minus)(1, 2);\n' +
//   'console.log(sum);\n' +
//   'console.log(division);'


// 'Object.defineProperty(exports, "__esModule", {\n' +
//   '  value: true\n' +
//   '});\n' +
//   'exports.minus = void 0;\n' +
//   'var minus = exports.minus = function minus(a, b) {\n' +
//   '  return a - b;\n' +
//   '};'



'{ "./src/index.js": { "deps": { "./add.js": "./src/add.js", "./minus.js": "./src/minus.js" }, "code": "\"use strict\";\n\nvar _add = _interopRequireDefault(require(\"./add.js\"));\nvar _minus = require(\"./minus.js\");\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\nvar sum = (0, _add[\"default\"])(1, 2);\nvar division = (0, _minus.minus)(1, 2);\nconsole.log(sum);\nconsole.log(division);" }, "./src/add.js": { "deps": { }, "code": "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = exports[\"default\"] = function _default(a, b) {\n  return a + b;\n};" }, "./src/minus.js": { "deps": { }, "code": "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.minus = void 0;\nvar minus = exports.minus = function minus(a, b) {\n  return a - b;\n};" } }'
