import React from 'react';
import TodoItem from './TodoItem/TodoItem';

const TodoItems = props => {
    return (  
        props.todoitems.map((item,index)=>{
            return(
                <TodoItem
                 key = {item.key}
                 todoitem = {item.task}
                 click ={()=>props.clicked(index)}
                />

            )
        })
    );
}

export default TodoItems;