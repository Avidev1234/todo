import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
// import TodoItem from "./components/TodoItem"
// import TodoItem2 from "./components/TodoItem2"
import "./App.css"
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    {
      name: 'Javascript',
      dueDate: '1/5/2024'
    },
    {
      name: 'Python',
      dueDate: '1/5/2024'
    },
    {
      name: 'React',
      dueDate: '1/5/2024'
    },
    {
      name: 'Anugular',
      dueDate: '1/5/2024'
    }
  ];
  return <center className="todo-container">
    <AppName />
      <AddTodo />
    <TodoItems Todoitem={todoItems}/>
  </center>

}
export default App
