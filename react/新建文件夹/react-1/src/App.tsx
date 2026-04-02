import "./App.css"
import { Child } from "./copmponents/child"

const App = function () {
  return <Child title="hello" render={() => <div>hello world</div>} />
}

export default App