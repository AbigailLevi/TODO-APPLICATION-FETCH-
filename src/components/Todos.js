import React, { useState, useEffect } from 'react'
const url = 'https://assets.breatheco.de/apis/fake/todos/user/AbigailLevi';

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const fetchGetTodos = () => {
            return fetch(url)
                .then(res => res.json())
                .then(res => {
                    return res
                })
                .catch(err => console.log('error:' + err))
        }
        const fetchCreateUser = () => {
            return fetch(url, {
                method: 'POST',
                body: JSON.stringify([{}]),
                headers: { 'content.Type': 'application/json' }
            })
                .then(res => res.json())
                .then(res => {
                    return res
                })
                .catch(err => console.log('error:' + err))
        }
        const fetchUpdateTodos = () => {
            const todosData = todos.map(todos => {
                return { label: 'todos', done: false }
            })
            return fetch(url, {
                method: 'PUT',
                body: JSON.stringify(todosData),
                headers: { 'content.Type': 'application/json' }
            })
                .then(res => res.json())
                .then(res => {
                    return res
                })
                .catch(err => console.log('error:' + err))
        }
        fetchGetTodos()
            .then(res => {
                console.log('response:' + JSON.stringify(res))
                if (res.msg) {
                    fetchCreateUser()
                        .then(res => console.log(res))
                } else {
                    console.log('user exits, here is response:' + JSON.stringify(res));
                }
            })
    }, [todos]);
    const deleteTodos = indexToDelete => {
        setTodos(prevTodos => {
            return prevTodos.filter((value, index) => {
                return indexToDelete !== index;
            })
        })
    }



    return (
        <div className="row d-block">
            <div className="YOLO col">
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
            </div>
            <div className="col">
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
        </div>
    )
}

export default Todos;