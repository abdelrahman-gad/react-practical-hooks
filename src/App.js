
import React , {useState,useEffect,useRef,useLayoutEffect,useCallback, useReducer } from 'react';
import {  useForm  } from "./useFrom";
import {useMeasure} from './useMeasure';
import Hello from './Hello';
// useContext is used to share logic and props through components
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
function App() {





  return (  
    <Router>
      <ul > 
        <li> <Link to="/">Home </Link>  </li>
        <li> <Link to="/about">About </Link>  </li>
       </ul>
       <Route  exact path="/"  component={Home}  />
       <Route  path="/about" component={About}  />
    </Router>
    );
} 

export default App;
