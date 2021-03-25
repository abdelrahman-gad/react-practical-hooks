import React ,{useContext} from "react";
import {  UserContext } from "./UserContext";



function About(){
    const {value,setValue} = useContext(UserContext);
    return  ( 
        <> 
          <h2>About :{value} </h2>
          <button onClick={()=>setValue('conext value has been changed from the about page')} >  Change context value from About Page  </button>
        </>
    );
}

export default About;