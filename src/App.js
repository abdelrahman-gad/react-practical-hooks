
import React , {useState,useEffect,useRef} from 'react';
import {  useForm  } from "./useFrom";
import {useFetch} from './useFetch';
import Hello from './Hello';
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
   
  const  [count , setCount] = useState(()=>JSON.parse(localStorage.getItem('count'))||0); 

   const state = useFetch(`http://numbersapi.com/${count}/trivia`);

   useEffect(() => {
     localStorage.setItem('count',JSON.stringify(count));
   }, [count]);

  return (
    <div className="App">
      {state.loading?'Loading.......':state.data}
      <button onClick={()=>setCount(c => c+1 )}>+</button>
      <Hello  />
      <br/>
      <input ref={inputRef}  type="text" name="email" value={values.email} onChange={handleChange}  />
      <input type="password" name="password" value={values.password}  onChange={handleChange} />
      <button onClick={()=> console.log(inputRef.current.focus()) } >Focuus </button>
        
      
    </div>
  );
}

export default App;
