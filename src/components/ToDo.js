import React from 'react';

const ToDo = ({todo, setTodos, todos}) => {
    const checkHandler = event => {
        // to checked
       setTodos(todos.map(
           item => {
               if(item.id === todo.id){
                   return {
                       ...item, completed : !item.completed
                   }
               }
               console.log(item);
               return item;

           }

       ));

    }

    const deleteHandler = event => {
        // to delete
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    return (
                <tr>
                    <td>{todo.text}</td>
                    <td>
                        <button className='btn btn-info' onClick={checkHandler}>
                            <i>✔</i>️
                        </button>
                        <button className='btn btn-info' onClick={deleteHandler}>
                            <i>🔥</i>
                        </button>
                    </td>
                </tr>
    );
}

export default ToDo;
