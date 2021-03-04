import React from 'react';
import ToDo from "./ToDo";

const ToDoList = ({todos, setTodos}) => {
    return (
        <div className="container">
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">to do</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map(todo=> (
                        <ToDo
                            setTodos={setTodos}
                            todos= {todos}
                            todo={todo}
                            key={todo.id}/>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default ToDoList;
