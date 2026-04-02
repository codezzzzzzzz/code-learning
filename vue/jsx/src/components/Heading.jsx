import { defineComponent, h } from 'vue'

// 被defineComponent包裹的内容才叫组件
export default defineComponent({ 
  props: { // 接收外部传过来的参数
    level: {
      type: Number,
      required: true,
    }
  },
  setup(props, { slots }) {
    const tag = 'h' + props.level
    return () => <tag>{slots.default()}</tag>  // 被生成为虚拟 DOM
  }
})