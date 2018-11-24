import React, {Fragment} from 'react';

const TodoForm = props => {
    return (  
        <Fragment>
            <form onSubmit= {props.addTodo}>
                <input 
                    type="text" 
                    placeholder="Enter TODO"
                    value={props.currentItem}
                    onChange ={props.changetodo}></input>
                <button type="submit"> Add Task</button>
            </form>
        </Fragment>
    );
}
 
export default TodoForm;