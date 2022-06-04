import React, { useReducer } from 'react';
import {Button} from '@mui/material'

const initialState=0;
const redu=(state,Action)=>{
    switch(Action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state;

    }
}
export const Reducer=()=>{
    const [count,dispatch]=useReducer(redu,initialState)
    return(
        <div>
           <div>Count-{count}</div>
       <Button variant='contained' onClick={()=>dispatch('increment')}>Increment</Button>
       <Button variant='contained' onClick={()=>dispatch('decrement')}>Decrement</Button>
       <Button variant='contained' onClick={()=>dispatch('reset')}>Reset</Button>
       </div>

    )

}