import React , {useState,useEffect,useRef,useLayoutEffect}  from 'react';
import {useFetch} from './useFetch';
import { useMeasure} from './useMeasure';

function Hello(){
    const  [count , setCount] = useState(()=>JSON.parse(localStorage.getItem('count'))||0); 

    const state = useFetch(`http://numbersapi.com/${count}/trivia`);

    useEffect(() => {
      localStorage.setItem('count',JSON.stringify(count));
    }, [count]);
 
    const [ rect , divRef] = useMeasure(  [state.data ]);
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