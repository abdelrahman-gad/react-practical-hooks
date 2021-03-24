import React , {useRef} from 'react';


export const  useCountRenderes  =  () =>{
 const renders = useRef(0);
 console.log('renders :'+renders.current++);

}