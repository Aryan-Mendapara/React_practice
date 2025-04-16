import React from 'react'
import { Decrement, Increment } from './Redux/Action/Action';
import { useDispatch, useSelector } from 'react-redux';

function Counts() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count)
  return (
    <div>
      <h1>Hello React-Redux</h1>
      <button onClick={() => dispatch(Increment())} className='border'>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(Decrement())} className='border'>Decrement</button>
    </div>
  )
}

export default Counts
