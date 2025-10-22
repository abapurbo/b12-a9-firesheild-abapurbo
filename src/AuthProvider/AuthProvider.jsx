import React, { useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Config/firebase.config';
// google provider
const googleProvider = new GoogleAuthProvider()
export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({
        displayName: 'apurbo'
    });


    //observe user in my web site 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const logOut = () => {
        return signOut(auth)
    }

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        handleGoogleSignIn

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}
