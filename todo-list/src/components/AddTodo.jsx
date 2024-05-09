function AddTodo() {
  return (
    <div className="row  ">
      <center className="w-75  d-flex justify-content-between mx-auto">
        <div className="col-4 ">
          <input type="text" placeholder="Enter Todo Here...." />
        </div>
        <div className="col-4 ">
          <input type="date" placeholder="Enter Date Here..." />
        </div>
        <div className="col-2 ">
          <button type="button" className="btn btn-success kg-button">Add</button>
        </div>
      </center>
    </div>
  );
}
export default AddTodo; 