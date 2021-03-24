
import React , {useState,useEffect,useRef,useLayoutEffect} from 'react';
import {  useForm  } from "./useFrom";

import Hello from './Hello';

// similar to useEffect 
//This runs synchronously immediately after React has performed all DOM mutations. [means after the browser paint all elements]
//This can be useful if you need to make DOM measurements (like getting the scroll position or other styles for an element) and then make DOM mutations or trigger a synchronous re-render by updating state.
function App() {
   const inputRef = useRef();
   const [values, handleChange] = useForm({email:'',password:''});
  //  replace of [componentDidMount , componentDidUpdate]
  // useEffect(()=>{
  //   console.log('render');
  // }); this will run with any change in the state

    // useEffect(()=>{
  // // console.log('render');
  // },[]);//will run only when componentDidMount

  // useEffect(()=>{
  //   console.log('render');
  //   return ()=>{};//this is a cleanup function "replace to componentWillUnmount"
  // },[email]);//array of dependencies if anyone of them changed useEffect will run the callback function
   
  
    useLayoutEffect(() => {
     // measure the dimensions of input after browser maskes all mutations
     console.log(inputRef.current.getBoundingClientRect());
    }, [])
  //  console.log(inputRef);
  return (
    <div className="App">
    
      <Hello  />
      <br/>
      <input ref={inputRef}  type="text" name="email" value={values.email} onChange={handleChange}  />
      <input type="password" name="password" value={values.password}  onChange={handleChange} />
      <button onClick={()=> console.log(inputRef.current.focus()) } >Focuus </button>
        
      
    </div>
  );
}

export default App;
