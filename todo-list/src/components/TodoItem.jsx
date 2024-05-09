import PropTypes from 'prop-types';

function TodoItem({todoName,todoDate,onDeleteclick}) {

    return (
        <div className="Container border ">
            <div className="row kg-row ">
                <div className="col-4  ">
                    {todoName}
                </div>
                <div className="col-4 ">
                    {todoDate}
                </div>
                <div className="col-2 ">
                    <button type="button" className="btn btn-danger kg-button" onClick={()=>onDeleteclick(todoName)}>Delete</button>
                </div>
            </div>  
        </div>
    );
}
TodoItem.propTypes = {
    todoName: PropTypes.string.isRequired,
    todoDate: PropTypes.string.isRequired,
    onDeleteclick: PropTypes.func.isRequired,
};
export default TodoItem;
