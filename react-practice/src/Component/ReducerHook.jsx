import React, { useReducer } from 'react'

function ReducerHook() {

    const reducer = (state , action) => {
        if (action.type === "INCREMENT") {
            return state + 1;
        }
        else if (action.type ==="DECREMENT") {
            return state - 1;
        }
        else {
            return state;
        }
    }

    const [Count , dispatch] = useReducer(reducer , 0);

  return (
    <div>
        <h1>{Count}</h1>
        <button onClick={() => dispatch({type:"INCREMENT"})} className='border'>INCREMENT</button>
        <button onClick={() => dispatch({type:"DECREMENT"})} className='border'>DECREMENT</button>
    </div>
  )
}

export default ReducerHook
