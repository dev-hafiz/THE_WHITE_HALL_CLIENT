import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () =>{

     const [user, setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
     const [authError, setAuthError] = useState('');




     
     return{
          user,
          isLoading,
          authError,

     }
}

export default useFirebase;