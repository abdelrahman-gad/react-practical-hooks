
import React , {useState,useEffect,useRef,useLayoutEffect,useCallback, useReducer } from 'react';
import {  useForm  } from "./useFrom";
import {useMeasure} from './useMeasure';
import Hello from './Hello';
// useContext is used to share logic and props through components
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import {UserContext} from './UserContext';

function App() {


const  [user ,setUser] = useState();


  return (  
    <Router>
      <ul > 
        <li> <Link to="/">Home </Link>  </li>
        <li> <Link to="/about">About </Link>  </li>
        <li>  {user?<button onClick={()=>setUser(null)}>Logout</button>:<button onClick={()=>setUser({name:'gad',email:'gad@gad'})} > Login </button> }  </li>
       </ul>
       <UserContext.Provider value={{ user, setUser }}>
        <Route  exact path="/"  component={Home}  />
        <Route  path="/about" component={About}  />
        
       </UserContext.Provider>
      
    </Router>
    );
} 

export default App;
