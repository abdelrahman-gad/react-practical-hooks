import React , {useState,useEffect,useRef,useLayoutEffect}  from 'react';
import {useFetch} from './useFetch';

function Hello(){
    const  [count , setCount] = useState(()=>JSON.parse(localStorage.getItem('count'))||0); 

    const state = useFetch(`http://numbersapi.com/${count}/trivia`);
 
    useEffect(() => {
      localStorage.setItem('count',JSON.stringify(count));
    }, [count]);
 
   const renders = useRef(0);
   console.log('renders current'+renders.current++ );

    return  ( <>
      {state.loading?'Loading.......':state.data}
      <button onClick={()=>setCount(c => c+1 )}>+</button>
       </>  )
}

export default Hello;