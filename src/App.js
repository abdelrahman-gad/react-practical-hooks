
import React , {useState,useEffect} from 'react';
import {  useForm  } from "./useFrom";
import {useFetch} from './useFetch';
function App() {
  
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
   
   const state = useFetch('http://numbersapi.com/43/trivia');


  return (
    <div className="App">
      {state.loading?'Loading.......':state.data}
      <input  type="text" name="email" value={values.email} onChange={handleChange}  />
      <input type="password" name="password" value={values.password}  onChange={handleChange} />
        
      
    </div>
  );
}

export default App;
