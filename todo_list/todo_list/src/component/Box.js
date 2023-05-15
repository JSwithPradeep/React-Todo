import React from 'react'
import Items from './items'

const Box = (props) => {
    const items = props.data.map(
        (singleData,index) => {
            return <Items removeHandler={props.removeHandler} key={index} id={index} item={singleData.items} time={singleData.time}/>
        }
    )
  return (
    <div className='p-3'>
        {items}
        
        {/*
       
        <Items />
        <Items/>
        <Items/>
        <Items/> */}

    </div>
  )
}

export default Box;