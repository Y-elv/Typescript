import React from 'react'
import '../Css/input.css'
import { Todo } from '../model'
import SingleTodo from './singleTodo';
import { Droppable } from 'react-beautiful-dnd';
interface props{
todos:Todo[];
setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
completedTodos:Todo[]
setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Todolist:React.FC<props>=({todos,setTodos ,completedTodos,setCompletedTodos})=>{
    return(
        <div className="container">
            <Droppable droppableId='TodosList'>
            {
                (provided)=>(
                    <div className='todos'ref={provided.innerRef}
                    {...provided.droppableProps}
                    >
                    <span className="todos__heading">
                      Active task 
                    </span>
                   {todos.map((todo,index) => (
                      <SingleTodo
                      index={index}
                      key={todo.id}
                      todo={todo}
                      todos={todos}
                      setTodos={setTodos}
                   
          />
          ))}
                  </div>
                )
            }
          
            </Droppable>
    <Droppable droppableId='TodosRemove'>
        {
            (provided)=>(
                <div className='todos-remove'ref={provided.innerRef}
                {...provided.droppableProps}
                >
                      <span className="todos__heading">
                        completed task 
                      </span>
                     {todos.map((todo,index) => (
                        <SingleTodo
                        index={index}
                        key={todo.id}
                        todo={todo}
                        todos={completedTodos}
                        setTodos={setCompletedTodos}
                     
            />
            ))}
                    </div>
            )
        }
   
    </Droppable>
    
        </div>
    )
    
}
export default Todolist