import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, reset } from './counterSlice'

function Counter() {
  const [range,setRange]=useState(1)
    // react hook to call a function/action inside slice:useDispatch
    const dispatch = useDispatch()
    // hook to access store in component : useSelector()
    const count =useSelector(state=>state.counter.value)
  return (
    <>
    <div className='d-flex align-items-center justify-content-center w-100 flex-column'>
      <h3 style={{fontSize:'60px'}}>{count}</h3>
      <div className='mt-4'>
        <button className='btn btn-danger' onClick={()=>dispatch(decreament(Number(range)))}>DECREMENT</button>
        <button className='btn btn-warning ms-3' onClick={()=>dispatch(reset())}  style={{width:'120px'}}>RESET</button>
        <button className='btn btn-success ms-3' onClick={()=>dispatch(increament(Number(range)))} >INCREMENT</button>
      </div>
    </div>
    <input type="text" className='form-control mt-3 w-100' placeholder='Enter Range' 
    style={{borderColor:'blue'}} 
    onChange={(e)=>setRange(e.target.value

    )}/>
    </>
  )
}

export default Counter