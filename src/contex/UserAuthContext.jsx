import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const[user,setUser]=useState({})

    const signUp=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
     }


     const logout=()=>{
      return signOut(auth)
     }

     const googleSingin=()=>{
      const googleAuthProvider= new GoogleAuthProvider()
      return signInWithPopup(auth,googleAuthProvider)
     }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser); // Update the user state
        });
      
        return () => {
          unsubscribe(); // Unsubscribe when the component unmounts
        };
      }, []);
      
  return (
    <userAuthContext.Provider value={{user,signUp,logIn,logout,googleSingin}}>{children}</userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
