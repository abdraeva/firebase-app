

import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { auth } from '../firebase/fierbase';
import { IUser } from '../types/types';
import { onAuthStateChanged } from 'firebase/auth';
import { Hooks } from '../hooks';



interface IProvider {
  children: React.ReactNode
}




const AuthProvider: React.FC<IProvider> = ({children}) => {

  const [user, setUser ] = React.useState<IUser | null>(null);
  const [token, setToken ] = React.useState<string | null | undefined >(null);
  const [render, setRender ] = React.useState<string>("");
  const [ state, setState] = React.useState<string | null>("screen");
  const { actions} = Hooks.useRedirect();

  const getToken = React.useCallback(() => {
    const tokenData = localStorage.getItem("accessToken");

    if(tokenData){
      setToken(tokenData);
    }else {
      setToken(undefined);
    }

  }, [token]);

  React.useEffect(() => {
    if(!localStorage.getItem("state")){
      localStorage.setItem("state", "screen");

    }else {
      const st = localStorage.getItem("state");
      setState(st);

    }
  }, [state]);

  const changeState = React.useCallback((st: string) => {
    localStorage.setItem("state", st);
    setState(st);

    switch(st){
      case "screen":
        actions.goToHome();
        break
      case "web":
        actions.goToHome();
        break
      case "admin":
        actions.goToAdmin();
        break
      default:
        actions.goToHome();

    }
  }, [actions]);



  const getUser = React.useCallback(() => {
    onAuthStateChanged(auth, res => {
      setUser({
        displayName: res?.displayName || "",
        email: res?.email || "",
        avatar: res?.photoURL || "" ,
      })
    })
  }, []);

  const signOut = React.useCallback(() => {
    localStorage.clear();
    setUser(null);
    setRender("Exit!");
    setToken(undefined);
    changeState("screen");
  }, [changeState]);

  React.useEffect(() => {
    getToken();
    getUser();
  }, [getToken, getUser, render]);


  const values = React.useMemo(() => ({
    
    token,
    user,
    setRender,
    signOut,
    state,
    setState,
    changeState
  }), [
        
        token,
        user,
        setRender,
        signOut,
        state,
        setState,
        changeState
    
      ]
  );


  return (
    <React.Fragment>
      <AuthContext.Provider value={values}>
         {children}
      </AuthContext.Provider>

    </React.Fragment>
  )
}

export default AuthProvider;