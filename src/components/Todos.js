import React, { useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('');
    const deleteTodos = indexToDelete => {

        setTodos(prevTodos => {
            return prevTodos.filter((value, index) => {
                return indexToDelete !== index;
            })
        })
    }

        /*fetch("https://jsonplaceholder.typicode.com/Abigaillevi")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log("Bad response");
                }
            })
            .then(data => {
                setTodos({ todos: data });
                console.log(data);
            })
            .catch(error => console.log(error));*/
    
    
        /*fetch("https://jsonplaceholder.typicode.com/Abigaillevi", {
            method: "PUT", // or 'POST'
            body: JSON.stringify(todos), // data can be `string` or {object}!
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(response => {
                if (!response.msg) {
                    todos;
                } else {
                    console.log(response.msg);
                }
                console.log(response);
            })
            .catch(error => console.error("Error:", error));*/
    


    return (
        <div className="YOLO">
            <h1 className="Type">TODOS</h1>

            <div className="Zay input-group">
                <input type="text" className="form-control" name={inputValue} value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter New To-Do" aria-label="Enter New To-Do" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button" onClick={() => {
                        setTodos(prevTodos => [
                            ...prevTodos, inputValue
                        ])
                        setInputValue('')
                    }
                    }
                    > Add</button>
                </div>
            </div>

            <ul className="list-group">
                {todos.map((value, index) => {
                    return <li className="Abby list-group-item d-flex justify-content-between align-items-center" key={index}>{value}
                        <span type="button" onClick={() => {
                            deleteTodos(index);
                        }}
                        >x</span>
                    </li>
                })}
                <li className="pain list-group-item d-flex justify-content-between align-items-center">
                    {todos.length} items
                 </li>
            </ul>
        </div>
    )
}

export default Todos;