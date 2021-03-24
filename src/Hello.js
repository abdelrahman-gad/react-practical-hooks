import React , {useRef}  from 'react';


function Hello(){

   const renders = useRef(0);
   console.log('renders current'+renders.current++ );
    return <h1>Hello</h1>
}

export default Hello;