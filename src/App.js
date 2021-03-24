
import React , {useState,useEffect,useRef,useLayoutEffect,useCallback, useReducer } from 'react';
import {  useForm  } from "./useFrom";
import {useMeasure} from './useMeasure';
import Hello from './Hello';
// useReducer is used to initiate and manipulate state in a way similar to redux pattern
// example 1: counter 

function reducer(state,action){
  switch(action.type){
    case action.type='INCREMENT':
      return state+1;
    case action.type='DECREMENT':
      return state-1;
    default :
      return state;
  }
}

function App() {

  const [state,dispatch] = useReducer(reducer,0)
   
  return (  
    <div className="App">
       
      <h3> {state} </h3>
      <button  onClick={()=>dispatch({type:'INCREMENT'})} >Increment</button>
      
       <button  onClick={()=>dispatch({type:'DECREMENT'})} >Decrement</button>
    </div>
    );
}

export default App;
