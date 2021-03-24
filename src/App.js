
import React , {useState,useEffect,useRef,useLayoutEffect,useCallback} from 'react';
import {  useForm  } from "./useFrom";
import {useMeasure} from './useMeasure';
import Hello from './Hello';

// useCallback hook is used to prevent calling some function every single rendering

function App() {
   const [count, setCount ]  = useState(0);
  const increment = useCallback(
    ()=>{
      setCount(c=>c+1);
    },
    [setCount],//now whenever count or setCount changes this increment function will be called
  )
  return (  
    <div className="App">
    
      <Hello  increment={increment}  />
       <div>Count : {count}</div>
      
    </div>
    );
}

export default App;
