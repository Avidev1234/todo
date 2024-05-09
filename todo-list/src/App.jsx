import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
// import TodoItem from "./components/TodoItem"
// import TodoItem2 from "./components/TodoItem2"
import "./App.css"
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Errormessage from "./components/Errormessage";
function App() {


 
  const [list, setList] = useState([]);
  const handleNewItem = (itemName, itemDate) => {
    console.log(`new Item Added ${itemName} and date ${itemDate}`);
    const newtodoItems = [...list, { name: itemName, dueDate: itemDate }]
    setList(newtodoItems);
  }

  const handledeleteItem=(tododItemName)=>{
    const newtodoItems=list.filter(item=>item.name!==tododItemName);
    setList(newtodoItems);
    console.log(`Item deleted:${tododItemName}`);
  }
  return <center className="todo-container">
    <AppName />
    <AddTodo onNewItem={handleNewItem} />
    {list.length ===0  && <Errormessage/>}
    <TodoItems Todoitem={list} onDeleteclick={handledeleteItem}/>
  </center>

}
export default App
