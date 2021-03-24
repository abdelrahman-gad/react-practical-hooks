
import React , {useState,useEffect} from 'react';
import {  useForm  } from "./useFrom";
function App() {
  
   const [values, handleChange] = useForm({email:'',password:''});
  //  replace of [componentDidMount , componentDidUpdate]
  // useEffect(()=>{
  //   console.log('render');
  // }); this will run with any change in the state

  // useEffect(()=>{
  // // console.log('render');
  // },[]);//will run only when componentDidMount

  useEffect(()=>{
    console.log('render');
    return ()=>{};//this is a cleanup function "replace to componentWillUnmount"
  },[email]);//array of dependencies if anyone of them changed useEffect will run the callback function


  return (
    <div className="App">
      <input  type="text" name="email" value={values.email} onChange={handleChange}  />
      <input type="password" name="password" value={values.password}  onChange={handleChange} />
        
      
    </div>
  );
}

export default App;
