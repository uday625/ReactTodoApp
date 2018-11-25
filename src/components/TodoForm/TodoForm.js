import React, {Fragment} from 'react';
import './TodoForm.css';

const TodoForm = props => {
    return (  
        <Fragment>
            <div className='TodoFormMain'>
                <form onSubmit= {props.addTodo}>
                    <div className="form-group row m-5">
                        <div className="col-sm-10">
                            <input className="form-control"
                                type="text" 
                                placeholder="+ Add a to-do..."
                                value={props.currentItem}
                                onChange ={props.changetodo}>
                            </input>
                        </div>
                        <div className ="col-sm-2">
                            <button type="submit" className="btn btn-warning"> Add Task</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}
 
export default TodoForm;