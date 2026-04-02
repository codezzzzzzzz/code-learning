<template>
  <div @click="add">
    <p>hello world</p>
    <p>count:{{state.count}}</p>
    <p>like:{{state.like.a}}</p>
    <p>age:{{age.value}}</p>
  </div>
</template>

<script setup>
import { reactive } from './reactivity/reactive.js'
import { effect } from './reactivity/effect.js'
import { ref } from './reactivity/ref.js'

// import { reactive, computed, effect, ref } from 'vue'

const age = ref(10)

const state = reactive({
  count: 0,
  like: {
    a: 2
  }
})

effect(() => {
  console.log('effect', age.value)
})

const add = () => {
  age.value++
}
</script>

<style lang="css" scoped>

</style>