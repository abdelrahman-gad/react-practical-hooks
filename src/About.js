import React ,{useContext} from "react";
import {  UserContext } from "./UserContext";



function About(){
    const {user ,setUser}  = useContext(UserContext);
    return  ( 
        <> 
          <h2>About  </h2>
          <pre> {JSON.stringify(user)} </pre>
        
        </>
    );
}

export default About;