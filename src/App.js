
import React , {useState,useEffect,useRef,useLayoutEffect} from 'react';
import {  useForm  } from "./useFrom";
import {useMeasure} from './useMeasure';
import Hello from './Hello';

// useCallback hook is used to prevent calling some function every single rendering

function App() {
   const [count, setCount ]  = useState(0);
  return (  
    <div className="App">
    
      <Hello  increment={()=>setCount(c=>c+1)}  />
       <div>Count : {count}</div>
      
    </div>
    );
}

export default App;
