import React, {Fragment, Component} from 'react';
import TodoItems from '../../components/TodoItems/TodoItems'
import TodoForm from '../../components/TodoForm/TodoForm';

class TodoList extends Component {

    state ={
        todos: [],
        currentItem: {
                key: '',
                task:''
            }
        
    }

    handleChangeInput = event => {
        const value = event.target.value;
        const key = Date.now();

        const item = {key:key,task:value};        
        this.setState ({currentItem:item});

    }

    handleFormSubmit = event => {
        
        event.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.task!==''){
            const updatedtodos =[...this.state.todos,newItem];
            const updatedCurrentItem ={key:'',task:''};
            this.setState({
                todos:updatedtodos, 
                currentItem: updatedCurrentItem,
            })
        }

        
    }

    handleDeleteItem = (itemIndex) =>{
        const todos =[...this.state.todos];
        todos.splice(itemIndex,1);
        this.setState({todos:todos});

    }


    render() { 
        return (  
        <Fragment>
            <div>
                <TodoForm  
                    addTodo    = {this.handleFormSubmit}
                    changetodo = {this.handleChangeInput}  
                    currentItem = {this.state.currentItem.task} 
                    /> 
                <p> Todo List</p>
                <TodoItems 
                    todoitems = {this.state.todos}
                    clicked = {this.handleDeleteItem}
                    />
            </div>
        </Fragment>

        );
    }
}
 
export default TodoList;