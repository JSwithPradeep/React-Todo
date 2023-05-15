import React, { useRef } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

const Input = (props) => {
  const inputBox = useRef();
  return (
    <div className='p-3 flex justify-around'>
        <input type='text' placeholder='Enter Data here' className='p-3 w-[90%] focus:outline-none border border-slate-400' ref= {inputBox} />
        <div className='cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center items-center'
        onClick={()=> {
          props.handler(inputBox.current.value)
          inputBox.current.value = "";
        }}>
           <AiOutlinePlus/></div>
    </div>
  )
}

export default Input