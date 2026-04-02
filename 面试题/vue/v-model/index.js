function observe(data) {
  if (!data || typeof data !== 'object') return;
  new Observer(data);
}

class Observer {
  constructor(value) {
    this.value = value;
    this.walk(value);
  }
  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    });
  }
}

function defineReactive(obj, key, val) {
  observe(val);
  Object.defineProperty(obj, key, {
    get () {
      // 依赖收集
      Dep.target && dep.addDep(Dep.target);
      return val;
    },
    set (newVal) {
      if (val === newVal) return;
      // 视图更新
      dep.notify();  // 通知watcher触发更新
    }
  })
}



class Vue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;
    // 处理data变成响应式
    observe(this.$data);
  }
}

class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);
    if (this.$el) {
      this.compile(this.$el);
    }
  }
  compile(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      if (this.isElement(node)) {  // 判断是否是元素节点
        console.log("编译元素" + node.nodeName);
      } else if (this.isInter(node)) { // 判断是否是文本节点
        console.log("编译文本" + node.textContent);
      }
      if (node.childNodes && node.childNodes.length) {
        this.compile(node);
      }
    })
  }
}


class Watcher {
  constructor(vm, key, updater) {
    this.vm = vm;
    this.key = key;
    this.updaterFn = updater;

    Dep.target = this;
    vm[key]  // 触发get
    Dep.target = null;
  }
}

class Dep {
  constructor() {
    this.deps = [];
  }
  addDep(dep) {
    this.deps.push(dep);
  }
  notify() {
    this.deps.forEach(dep => dep.update());
  }
}








const v = new Vue({
  el: "#app",
  template: `<input v-model="msg" /> --- {{msg}}`,
  data: {
    msg: "",  // dep => [msg用在了哪个地方， 又用在了哪个地方]
    msg2: "",
    msg3: "",
  },
})
{/* <p>{{msg}}</p>
<p>{{msg2}}</p>
<p>{{msg3}}</p> */}

// watcher1    key = msg       Dep1 => deps = [watcher1, watcher2]
// watcher2    key = msg2
// watcher3    key = msg3