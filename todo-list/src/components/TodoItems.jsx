import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

function TodoItems({ Todoitem }) {
  return (
    <div className="items">
      <center className='w-75 d-flex flex-column justify-content-between p-4'>
      {Todoitem.map((todoItem, index) => (
        <TodoItem
          key={index}
          todoDate={todoItem.dueDate}
          todoName={todoItem.name}
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

export default TodoItems;
