import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

function TodoItems({ Todoitem,onDeleteclick}) {
  return (
    <div className="items">
      <center className='w-75 d-flex flex-column justify-content-between p-4'>
      {Todoitem.map((todoItem, index) => (
        <TodoItem
          key={index}
          todoDate={todoItem.dueDate}
          todoName={todoItem.name}
          onDeleteclick={onDeleteclick}
        />
      ))}
      </center>
    </div>
  );
}

TodoItems.propTypes = {
    Todoitem: PropTypes.arrayOf(
    PropTypes.shape({
      todoDate: PropTypes.string.isRequired,
      todoName: PropTypes.string.isRequired,
     
    })
  ).isRequired,
};
TodoItems.propTypes = {
  onDeleteclick: PropTypes.func
};
export default TodoItems;
