
import React , {useState,useEffect,useRef,useLayoutEffect,useCallback, useReducer } from 'react';
import {  useForm  } from "./useFrom";
import {useMeasure} from './useMeasure';
import Hello from './Hello';
// useReducer is used to initiate and manipulate state in a way similar to redux pattern
// example 1: counter 



function reducer(state,action){
  console.log(state);
  switch(action.type){
    case action.type='ADD_TODO':
      return {
         todos:[...state.todos,{text:action.payload.text,completed:false}],
         todoCount:state.todoCount+1
        };  
    case action.type='UPDATE_STATUS':
      console.log(action);
      return {
        todos:state.todos.map( (todo,idx) =>  idx===action.idx?{...todo,completed:!todo.completed}:todo )
      }    
    default :
      return state;
  }
}

function App() {


  const initialState = { 
      todos: [],
      todoCount:0 
    };
  const [state,dispatch] = useReducer(reducer,initialState);
  const [text,setText] = useState('');


  return (  
    <div className="App" style={{ width:'600px' , margin:'50px auto' ,minHeight:'400px' , border:'1px solid dodgerblue',padding:'10px' }}>
     <form onSubmit={(e)=>{
      e.preventDefault();
      dispatch({type:'ADD_TODO',payload:{text}});
      setText('');
     }}> 
         
      <h4>  ALL TODOS: {state.todos.length} ||
       FINISHED   {state.todos.filter(todo=>todo.completed===true).length}  ||
         UNFINISHED {state.todos.filter(todo=>todo.completed===false).length}  </h4>   
      <input  type="text"  value={text} onChange={(e)=>setText(e.target.value)} />
     
     </form>
     <div>  {state.todos.map((todo,idx)=>{
       return <h3 key={idx}  onClick={()=> dispatch({type:'UPDATE_STATUS',idx})}> {todo.text}  {todo.completed? <> &#10004;</>:''} </h3>
     })}   </div>
     
    </div>
    );
}

export default App;
