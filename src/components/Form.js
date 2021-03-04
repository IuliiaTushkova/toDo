import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text : inputText,
                completed : false,
                id : (Math.random()*100).toFixed(2)
            }
        ])
        setInputText('');
    }
    return (
        <div className="container">
            <form>
                <input
                   value={inputText}
                   onChange={inputTextHandler}
                   type="text"
                   className='form-control form-control-lg'
                />
                <select name='todos'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
                <button type='submit' className="btn btn-primary mb-2" onClick={submitToDoHandler}>Submit</button>
            </form>
        </div>
    );
}

export default Form;
