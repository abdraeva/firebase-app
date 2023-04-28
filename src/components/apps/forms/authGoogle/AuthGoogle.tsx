

import React from 'react';
import { signInWithPopup } from 'firebase/auth';

import cls from "./index.module.scss";
import { Hooks } from '../../../../hooks';
import { Providers } from '../../../../provider';
import { auth, joinWithGoogle } from '../../../../firebase/fierbase';

interface IAuthGoogle {
  location: string
}

export const AuthGoogle: React.FunctionComponent<IAuthGoogle> = ({location}) => {
  const GoogleImg = "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
  const { actions } = Hooks.useRedirect();
  const { setRender } = Providers.useAuth();
  
  
  const handleAuthWithGoogle = () => {
    signInWithPopup(auth, joinWithGoogle )
     .then((res: any) => {
      localStorage.setItem("accessToken", res.user.accessToken);
      localStorage.setItem("refreshToken", res.user.refreshToken);
      actions.goToHome();
      setRender("Reload");
     })

  }


  return (
    <p className={cls.authGoogle} onClick={handleAuthWithGoogle}>
      {
        location === "signIn"
        ? "Or you can Log in with"
        : "Or you can Sign up with"
      }
      <img src={GoogleImg} alt='googleIcon'/>
    </p>
  )
};
