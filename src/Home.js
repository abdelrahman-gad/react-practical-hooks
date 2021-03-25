import React ,{useContext} from "react";
import {  UserContext } from "./UserContext";

function Home(){
    const {value,setValue} = useContext(UserContext);
    
    return  ( 
        <> 
          <h2>Home :  {value} </h2>
          <button onClick={()=>setValue('conext value has been changed from the Home page')} >  Change context value from Home Page  </button>
        </>
    );
}

export default Home;