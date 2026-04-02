const targetMap = new WeakMap()
let activeEffect = null  // 副作用函数

export function effect(fn, options = {}) {
  const effectFn = () => {
    try {
      activeEffect = fn
      return fn()
    } catch (error) {
      activeEffect = null
    }
  }
  effectFn()
}

// 依赖收集
export function track(target, type, key) {
  // targetMap = {
  //   state: {
  //     count: [effect1, effect2, ...]
  //   }
  // }
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
  }
  if (!deps.has(activeEffect) && activeEffect) {
    deps.add(activeEffect)
  }
  depsMap.set(key, deps)
}

// 触发依赖
export function trigger(target, type, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return

  const deps = depsMap.get(key)
  if (!deps) return

  deps.forEach(effect => {
    effect()
  })
}


