import { mutableHandlers } from './baseHandlers.js' 

export const reactiveMap = new WeakMap()

export function reactive(target) {
  return createReactiveObject(target, mutableHandlers, reactiveMap)
}

function createReactiveObject(target, proxyHandlers, proxyMap) {  // 创建响应式对象
  if (typeof target !== 'object') {
    return target
  }
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }

  const proxy = new Proxy(target, proxyHandlers)
  proxyMap.set(target, proxy)
  return proxy
}