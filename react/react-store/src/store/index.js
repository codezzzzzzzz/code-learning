import { createContext, useContext } from "react";
import counterStore from "./counterStore";
import personStore from "./personStore";
import taskStore from "./taskStore";
import todoStroe from "./todoStore";

class RootStore {
  constructor() {
    this.counterStore = counterStore
    this.personStore = personStore
    this.taskStore = taskStore
    this.todoStore = todoStroe
  }
}

const rootStore = new RootStore()

const context = createContext(rootStore)
const useStore = () => useContext(context)

export { useStore }