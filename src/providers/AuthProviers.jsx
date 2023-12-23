import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()
const auth = getAuth(app);
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProviers = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signin = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
        
    }

    const googlelogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser)
            console.log('current user', currentuser)
            setLoading(false)
        })
        return ()=> {
            return unsubscribe()
        }
    },[])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
        
    }


    const authInfo = {
        user,
        loading,
        createUser,
        signin,
        googlelogin,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviers;