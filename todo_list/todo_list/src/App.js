
import './App.css';
import Input from './component/input';
import Box from './component/Box';
import { useEffect, useState } from 'react';
function App() {
  
  const [todos, setTodos] = useState([]);

  const removeTodo =(id)=>{
    console.log(id)
    
    const newTodos = todos.filter (
      (d,index) => {

        if(index !== id){
          return true;
        }else{
          return false;
        }
      }
    )
    setTodos(newTodos);
  }
  const addTodoHandler = (items)=> {
   // console.log(item)
   setTodos(
    
    [
      ...todos,
      {
      items, 
      time: new Date().toLocaleTimeString()
      }
    ]

  )

}

  
  return (
    <div className="bg-black h-screen p-3">
    <div className="rounded mx-auto max-w-[750px] min-h-[750px] shadow-xl bg-white">
    <Input handler={addTodoHandler} />
    <Box data= {todos} removeHandler={removeTodo} />
    </div>
  </div>
  );
}

export default App;
