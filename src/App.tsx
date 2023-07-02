
import InputField from "./components/InputField.tsx";
import React,{useState} from 'react';
import './App.css'
import { Todo } from "./model.ts";
import Todolist from "./components/Todolist.tsx";
import { DragDropContext,DropResult  } from 'react-beautiful-dnd'

// let name:string;
// let age:number | string;
// let hobbies :string[];
// let role:[number,string];

// age=5
// // type Person={
// //   name:string;
// //   age?:number;
// // }
// interface Person{
//   name:string;
//   age?:number;
// }
// let person :Person={
//   name:"elvis"
// };
// function printName(name:string){
//   console.log(name)
// }
// printName("elvis") 
// let showName :(name:string)=>number
// let personName:unknown
// type x={
//   a:string;
//   b:number
// }
// interface girl extends x{
//   name:string;
//   age?:number
// }
const App:React.FC=() =>{
 const [todo, setTodo]=useState<string |number >("")
const [todos,setTodos]= useState<Todo[]>([])
const [completedTodos,setCompletedTodos]=useState<Todo[]>([])

const handleAdd =(e:React.FormEvent)=>{
  e.preventDefault();
  if(todo){
    setTodos([...todos,{
      id:Date.now(),
      todo,
      isDone:false
    }])
    setTodo("")
  }

}
console.log(todos)

const handleDragEnd = (result: DropResult) => {
  const { source, destination } = result;

  // Check if the destination is valid
  if (!destination) {
    return;
  }

  // Reorder the todos array based on the drag and drop result
  const updatedTodos = Array.from(todos);
  const [removed] = updatedTodos.splice(source.index, 1);
  updatedTodos.splice(destination.index, 0, removed);

  setTodos(updatedTodos);
};
  return (
    <DragDropContext onDragEnd={handleDragEnd} >
        <div className="App">
    <span className="heading">Todo list</span>
    <InputField 
    todo={todo}
    setTodo={setTodo}
    handleAdd={handleAdd}
    />
  
 
<Todolist
todos={todos}
setTodos={setTodos}
completedTodos={completedTodos}
setCompletedTodos={setCompletedTodos}
/>

  </div>
    </DragDropContext>


    
  )
}

export default App
