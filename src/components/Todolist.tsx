import React from 'react'
import '../Css/input.css'
import { Todo } from '../model'
import SingleTodo from './singleTodo';
interface props{
todos:Todo[];
setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Todolist:React.FC<props>=({todos,setTodos})=>{
    return(
        <div className='todos'>
         {todos.map((todo) => (
            <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
         
/>
))}
        </div>
    )
    
}
export default Todolist