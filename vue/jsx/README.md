# template
在 html 中写 js 语法

# jsx
 在 js 中写 html 语法

 减少代码冗余

 组件化开发更灵活

 通常用来开发更加复杂且灵活的组件


# h函数

template 模板 ==》 编译（得到一个对象） ==》 render函数渲染（得到一个 dom 树） ==》生成真实的html


{
  type: 'div',
  if: xxxxxx,
  for: xxx,
  props: {
    
  }
}

<!-- 虚拟 dom -->
{
  1:{
    tag: 'div',
    className: 'box',
    children: [
      {
        tag: 'span',
        children: 'world'
      }
    ]
  },
  2:{
    tag: 'div',
    className: 'box',
    children: [
      {
        tag: 'span',
        children: 'hello'
      }
    ]
  }
}

新旧虚拟 dom 对比，找出差异  diff 算法

可以创建虚拟 DOM 的函数，统称为 h 函数


# jsx 开发 todolist 组件
1. 安装 @vitejs/plugin-vue-jsx  （用于将 jsx 语法转变为 h()函数返回值一样的结构）


# jsx vs template
1. jsx 可以支持更动态的需求
2. 可以在一个文件内返回多个组件