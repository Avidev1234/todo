
import PropTypes from 'prop-types';
import { useState } from 'react';
function AddTodo({ onNewItem }) {
  // console.log(onNewItem);

  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  const handletextChange =(e)=>{
    setInput(e.target.value);
  }

  const handledateChange =(e)=>{
    setText(e.target.value);
  }
const handleAddbtnclick= ()=>{
  onNewItem(input,text);
  setText("");
  setInput("");
}
  return (
    <div className="row">
      <center className="w-75  d-flex justify-content-between mx-auto">
        <div className="col-4 ">
          <input type="text" placeholder="Enter Todo Here...." onChange={handletextChange} value={input} />
        </div>
        <div className="col-4 ">
          <input type="date" placeholder="Enter Date Here..." onChange={handledateChange} value={text} />
        </div>
        <div className="col-2 ">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddbtnclick}>Add</button>
        </div>
      </center>
    </div>
  );
}

AddTodo.propTypes = {
  onNewItem: PropTypes.func,
  btnClick: PropTypes.func
};
export default AddTodo; 