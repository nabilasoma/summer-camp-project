import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";



const auth = getAuth(app);
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const logIn = (email, password) => {
        setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }



    const logOut = () => {
        setLoading(true)
       return signOut(auth)
    }


    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
              displayName: name, 
              photoUrl: photo
          })
  }



    useEffect(() => {
     const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);

            if(currentUser){
                axios.post('http://localhost:4000/jwt', {email: currentUser.email})
                .then(data => {
                    // console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }


            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        googleSign,
        loading,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;