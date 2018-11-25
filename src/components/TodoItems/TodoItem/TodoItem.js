import React from 'react';
import './TodoItem.css';

const TodoItem = props => {
    return (  
        <div className="TodoItemMain">
            <div className="list-group">                
                <li className="list-group-item list-group-item-action itemborder" onClick={props.click} > {props.todoitem} </li>
            </div>
        </div>




    );
}

export default TodoItem;