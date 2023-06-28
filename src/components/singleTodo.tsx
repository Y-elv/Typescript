import React ,{useState}from 'react'
import { AiFillDelete } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { Todo } from '../model';
import '../Css/input.css'
type props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const SingleTodo = ({ todo, todos, setTodos }: props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<stringtring>(todo.todo)
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>

                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo

            )
        )

    }
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))

    }
    const handleEdit=(e:React.FormEvent,id:number)=>{
        e.preventDefault()
    
    }
    return (
        <form className='todos_single'onSubmit={(e)=>handleEdit(e,todo.id)}>
            {
                edit ? (
                    <input 
                    value={editTodo}
                    onChange={(e)=>setEditTodo(e.target.value)}
                    className='editInput'
                    />
                ) : (
                    todo.isDone ? (
                        <s className="todos_singleText">{todo.todo}</s>
                    ) : (
                        <span className="todos_singleText">{todo.todo}</span>
                    )
                )
            }



            <div className='icon_holder'>
                <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                <span className="icon" onClick={() => {


                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }}><FiEdit2 /></span>
                <span className="icon" onClick={() => handleDone(todo.id)}>  <MdDone /></span>
            </div>
        </form>
    )
}
export default SingleTodo
