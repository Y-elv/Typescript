
import InputField from "./components/InputField.tsx";
import React,{useState} from 'react';
import './App.css'
import { Todo } from "./model.ts";

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
  return (
    <>
  <div className="App">
    <span className="heading">Todo list</span>
    <InputField 
    todo={todo}
    setTodo={setTodo}
    handleAdd={handleAdd}
    />
  
  {todos.map((t) => (
  <li key={t.id}>{t.todo}</li>
))}
  </div>

    </>
  )
}

export default App
