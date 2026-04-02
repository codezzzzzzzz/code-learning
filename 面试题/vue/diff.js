let oldVNode = {
  tag: 'div',
  props: {
    id: 'app'
  },
  children: [
    {
      tag: 'p',
      props: {
        class: 'p'
      },
      children: '文本内容',
      elm: '<p>文本内容</p>'
    },
    {
      tag: 'h3',
      children: '0'
    }
  ]
}

let newVNode = {
  tag: 'div',
  props: {
    id: 'app'
  },
  children: [
    {
      tag: 'p',
      props: {
        class: 'p'
      },
      children: '文本内容',
      elm: '<p>文本内容</p>'
    },
    {
      tag: 'h3',
      children: '1'
    }
  ]
}

const patch = {  // 补丁包
  'oldVNode.children[1]': {
    tag: 'h3',
    type: 'text',
    oldText: '0',
    newtext: '1',
    handle: 'update'
  }
}

document.getElementById('app').querySelector('h3').innerHTML = patch['oldVNode.children[1]'].newtext

// <div id="app">
//   <p class="p">文本内容</p>
//   <h3>1</h3>
// </div>
