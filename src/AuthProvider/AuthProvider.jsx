import React, { useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Config/firebase.config';
import { Toaster } from 'react-hot-toast';
// google provider
const googleProvider = new GoogleAuthProvider()
export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({
        displayName: 'apurbo'
    });

    console.log(user)
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
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // user update profile
    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    // reset password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
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
        profileUpdate,
        logOut,
        resetPassword ,
        handleGoogleSignIn

    }
    return (
        <AuthContext value={authInfo}>
            {children}
            <Toaster/>

        </AuthContext>
    )
}
