import { MdLibraryAdd } from "react-icons/md";
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
function AddTodo({ onNewItem }) {
  // console.log(onNewItem);

  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  let noofUpdates = useRef(0);
  const handletextChange = (e) => {
    setInput(e.target.value);
    noofUpdates.current += 1;
  }

  const handledateChange = (e) => {
    setText(e.target.value);
    console.log(`The number of updates are ${noofUpdates.current}`, noofUpdates);
  }
  const handleAddbtnclick = (e) => {
    onNewItem(input, text);
    setText("");
    setInput("");
    // console.log(e);  
    e.preventDefault();

  }
  return (
    <div className="row">
      <form action="" onSubmit={handleAddbtnclick}>
        <center className="w-75  d-flex justify-content-between mx-auto">
          <div className="col-4 ">
            <input type="text"
             placeholder="Enter Todo Here...." 
             onChange={handletextChange} 
             value={input} />
          </div>
          <div className="col-4 ">
            <input type="date"
             placeholder="Enter Date Here..."
              onChange={handledateChange} 
              value={text} />
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