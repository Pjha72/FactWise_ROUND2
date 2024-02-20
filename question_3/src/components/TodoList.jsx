import React, {useState, useEffect} from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const sortTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(sortTodos);
    },[]);

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);

    const toggleTodo = (id) => {
        setTodos(todos.map((todo)=>{
            if(todo.id === id){
                return {...todo, checked: !todo.checked}
            }
            return todo;
        }));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo)=>todo.id !== id));
    };

    const AddTodo = (text) => {
        const newTodo = {
            id : Date.now(),
            text : text,
            checked: false,
            createdAt : Date.now(),
            completedAt : null
        };
        setTodos([...todos, newTodo]);
    };

    const sortTodos = [...todos].sort((a,b)=>{
        if(a.checked === b.checked){
            return a.checked ? a.completedAt - b.completedAt : b.createdAt - a.createdAt;
        }
        return a.checked ? 1 : -1;
    });
    return (
        <div>
            <ul>
                {sortTodos.map((todo)=>(
                    <li key={todo.id} onClick={()=>toggleTodo(todo.id)}>
                        {todo.text}
                        {todo.checked && <span>(Completed)</span>}
                        <button onClick={(e)=>{
                            e.stopPropagation();
                            deleteTodo(todo.id);
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
            <input type="text" placeholder="Add New Todo" onKeyDown = {(e)=>{
                if(e.key === 'Enter'){
                    AddTodo(e.target.value);
                    e.target.value = '';
                }
            }} />
        </div>
    )
}
export default TodoList;