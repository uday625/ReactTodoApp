import React from 'react';

const TodoItem = props => {
    return (  
        <div>
            <li onClick={props.click}> {props.todoitem}</li>
        </div>
    );
}

export default TodoItem;