import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,  signOut , onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider , updateProfile  } from "firebase/auth";

initializeAuthentication()

const useFirebase = () =>{

     //User state
     const [user, setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
     const [authError, setAuthError] = useState('');

     // Auth and Provider
     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider()


        //Google SignIn
        const googleUserSignIn = (location, navigate) =>{
          setIsLoading(true)
          signInWithPopup(auth, googleProvider)
          .then((result) => {
               
               const user = result.user;
               
               const destination = location?.state?.from || '/';
               navigate(destination)
               setAuthError('');
          }).catch((error) => {
               setAuthError(error.message);
          })
          .finally(()=> setIsLoading(false));
     }


      //registerUser
      const registerUser =(email, password, name, navigate) =>{
          setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {

              setAuthError('')
              const newUser = {email, displayName:name}
              setUser(newUser)
              
              
              //Send name to firebase 
              updateProfile(auth.currentUser, {
               displayName: name
             }).then(() => {
               
             }).catch((error) => {
               
             });
             navigate('/');
          })
          .catch((error) => {
          setAuthError(error.message);
          
          })
          .finally(()=> setIsLoading(false));
          
      }


       //LoginUser With Email And Pass
       const loginUser = (email , password, location, navigate) =>{
          setIsLoading(true)
          signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
               const destination = location?.state?.from || '/';
               navigate(destination)
               setUser(result.user)
               setAuthError('')
          })
          .catch((error) => {
          setAuthError(error.message);
          })
          .finally(()=> setIsLoading(false));;

     }

     //LogoutUser
     const logOut = () =>{
          setIsLoading(true)
          signOut(auth).then(() => {
               setUser({})
             }).catch((error) => {
               setAuthError(error.message);
             })
             .finally(()=> setIsLoading(false));;
     }


       //Setup user state Observer 
       useEffect( ()=>{
          const unsubscribe = onAuthStateChanged(auth, (user) => {
                  if (user) {
                    setUser(user)
                    
                  } else {
                    setUser({})
                  }
                  setIsLoading(false)
                });
             return ()=> unsubscribe;
        },[])
     
     return{
          user,
          isLoading,
          authError,
          loginUser,
          googleUserSignIn,
          logOut,
          registerUser

     }
}

export default useFirebase;