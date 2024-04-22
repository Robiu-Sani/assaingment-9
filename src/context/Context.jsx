import React, { useState, createContext, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  GithubAuthProvider, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile 
} from "firebase/auth";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();

export default function Context(props) {
  const [getUser, setGetUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const updateUserProfile = (data) => {
    updateProfile(auth.currentUser, data)
      .then((result) => {
      })
      .catch(err => {
        console.log(err);
      });
  };


  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithGitHub = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setGetUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authValue = {
    getUser,
    createUser,
    logOut,
    login,
    signInWithGoogle,
    signInWithGitHub,
    loader,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
