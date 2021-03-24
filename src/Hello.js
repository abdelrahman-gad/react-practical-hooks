import React , {useRef}  from 'react';


// useRef does not cause yot component to re-render when it changes
// useRef is also used to refere to a DOM element and also any another value

function Hello(){

   const renders = useRef(0);
   console.log('renders current'+renders.current++ );
    return <h1>Hello</h1>
}

export default Hello;