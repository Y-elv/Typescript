import React ,{useState}from "react";
import '../Css/input.css';
interface props{
    todo:string | number;
     setTodo: React.Dispatch<React.SetStateAction<string | number>>
     handleAdd:(e:React.FormEvent)=>void
}
const InputField:React.FC<props> =({ todo, setTodo,handleAdd})=>{
    return (
        <form className="input"onSubmit={(e)=>handleAdd(e)}>
         <input type="input"
         value={todo}
         onChange={
            (e)=>setTodo(e.target.value)
         }
         placeholder="enter a task"className="input_box"/>
        <button className="input_submit"type="submit">Go</button>
        </form>
    )
}
export default InputField