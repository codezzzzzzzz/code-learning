import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from'../store'

function Foo() {
  const { taskStore } = useStore()

  return (
    <div>
      <ul>
        {taskStore.list.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default observer(Foo)
