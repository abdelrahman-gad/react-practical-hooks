import React , {useState,useEffect,useRef,useLayoutEffect}  from 'react';
import {useFetch} from './useFetch';

function Hello(){
    const  [count , setCount] = useState(()=>JSON.parse(localStorage.getItem('count'))||0); 
    const  divRef = useRef();
    const state = useFetch(`http://numbersapi.com/${count}/trivia`);
    const [rect,setRect] = useState({});
    useEffect(() => {
      localStorage.setItem('count',JSON.stringify(count));
    }, [count]);
 
    useLayoutEffect(() => {
        console.log('hello');
        // console.log();
        setRect(divRef.current.getBoundingClientRect())
    }, [state.data])
   const renders = useRef(0);
   console.log('renders current'+renders.current++ );

    return  ( <>
       <div style={{display:'flex' ,border:'2px solid red'}} >
          <div ref={divRef} style={{ border:'2px solid green' }} > {state.loading?'Loading.......':state.data}</div>
       </div>
       <div> dimensions of the above greened bordered div {JSON.stringify(rect)} </div>
       <button onClick={()=>setCount(c => c+1 )}>+</button>
       </>  )
}

export default Hello;