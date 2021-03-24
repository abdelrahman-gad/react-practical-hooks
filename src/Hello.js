import React , {useState,useEffect,useRef,useLayoutEffect, useCallback}  from 'react';
import {useFetch} from './useFetch';
import { useMeasure} from './useMeasure';
import {useCountRenderes} from './useCountRenders';
// react memo will check the passed props and render only if the passed props has changed "it make use of memoization which is very usefull when there is an axpensive computation"
const  Hello = React.memo(({increment}) =>{
    useCountRenderes();
    return  ( <>
      
       <button onClick={increment }>+</button>
       </>  )
});

export default Hello;