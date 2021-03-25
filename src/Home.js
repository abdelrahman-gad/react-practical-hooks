import React ,{useContext} from "react";
import {  UserContext } from "./UserContext";

function Home(){
    const {user ,setUser}  = useContext(UserContext);
    return  ( 
        <> 
          <h2>Home :   </h2>
          <pre>
              {JSON.stringify(user)}
          </pre>
        
        </>
    );
}

export default Home;