const express = require('express');
const app = express();
const Vue = require('vue');
const vue3Compiler = require('@vue/compiler-ssr');
const renderer = require('@vue/server-renderer')

const vueapp = {
  template: `
    <div>
      <h1 @click='add'>Hello, SSR!</h1>
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
    </div>
  `,
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  methods: {
    add() {
      this.items.push(`Item ${this.items.length + 1}`);
    }
  }
}

// 读取vue文件，编译成js代码
vueapp.ssrRender = new Function('require', vue3Compiler.compile(vueapp.template).code)(require);
// console.log(vueapp.ssrRender());

app.get('/', async (req, res) => {
  let vapp = Vue.createSSRApp(vueapp);
  let html = await renderer.renderToString(vapp); // 渲染成html
  const title = 'SSR Demo';
  let ret = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body>
      ${html}
    </body>
    </html>`;

  res.send(ret);
})



app.listen(3000, () => {
  console.log('SSR server is running on port 3000');
});


// vue ssr  原理
// 1. 创建 node 服务
// 2. 读取 vue 组件
// 3. 借助 vue 自带编译器函数编译 vue 组件 得到 AST
// 4. 借助 vue 自带渲染器函数渲染 AST 得到 html
// 5. 拼接 html 模板
// 6. 发送响应