import React , {useState,useEffect,useRef,useLayoutEffect, useCallback}  from 'react';
import {useFetch} from './useFetch';
import { useMeasure} from './useMeasure';
import {useCountRenderes} from './useCountRenders';

const  Hello = React.memo(({increment}) =>{
    useCountRenderes();
    return  ( <>
      
       <button onClick={increment }>+</button>
       </>  );
});

export default Hello;