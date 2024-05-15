import { MdLibraryAdd } from "react-icons/md";
import PropTypes from 'prop-types';
import {  useRef } from 'react';
function AddTodo({ onNewItem }) {
  // console.log(onNewItem);

  // const [input, setInput] = useState("");
  // const [text, setText] = useState("");
// using ref so that the whole page doesn't reload only particular field can be reload

// const noofUpdate =useRef(0); 

  let todonameElement = useRef();
  let tododateElement = useRef();

  // const handletextChange = (e) => {
  //   setInput(e.target.value);
  //   todonameElement.current += 1;
  //   // noofUpdate.current += 1;
  // }

  // const handledateChange = (e) => {
  //   setText(e.target.value);
  //   console.log(`The number of updates are ${todonameElement.current}`, todonameElement);
  //   // console.log(`The number of updates are ${noofUpdate.current}`, noofUpdate);
  // }
  const handleAddbtnclick = (e) => {
    // setText("");
    // setInput("");
    // console.log(e); 
    const todoName=todonameElement.current.value;
    const todoDate=tododateElement.current.value; 
    todonameElement.current.value="";
    tododateElement.current.value="";

    onNewItem(todoName, todoDate);

    console.log(`${todoName} due on :${todoDate}`);

    e.preventDefault();

  }
  return (
    <div className="row">
      <form action="" onSubmit={handleAddbtnclick}>
        <center className="w-75  d-flex justify-content-between mx-auto">
          <div className="col-4 ">
            <input 
            type="text"
            ref={todonameElement}
             placeholder="Enter Todo Here...." 
            //  onChange={handletextChange} 
            //  value={input}
              />
          </div>
          <div className="col-4 ">
            <input 
            type="date"
            ref={tododateElement}
             placeholder="Enter Date Here..."
              // onChange={handledateChange} 
              // value={text}
               />
          </div>
          <div className="col-2 ">
            <button type="submit" className="btn btn-success kg-button" ><MdLibraryAdd /></button>
          </div>
        </center>
      </form>
    </div>
  );
}

AddTodo.propTypes = {
  onNewItem: PropTypes.func,
  btnClick: PropTypes.func
};
export default AddTodo; 