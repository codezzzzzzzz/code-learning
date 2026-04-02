import { useState, useEffect } from 'react'
// import counterStore from './store/counterStore.js'
// import personStore from './store/personStore.js'
import { useStore } from './store/index.js'
import { observer } from 'mobx-react-lite'

import Foo from './components/Foo.jsx'
import Bar from './components/Bar.jsx'

function App() {

  const store = useStore()

  useEffect(() => {
    store.personStore.getSingers()  // 异步代码
  }, [])
  

  return (
    <div>
      <button onClick={() => store.counterStore.addCount()}>{store.counterStore.count}</button>
      <ul onClick={() => store.counterStore.changeList()}>
        {
          store.counterStore.filterList.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
      <ul>
        {
          store.personStore.singers.map(item => {
            return <li key={item.name}>{item.name}</li>
          })
        }
      </ul>

      <Foo />
      <Bar />
    </div>
  )
}

export default observer(App)