

import React from 'react';
import cls from "./index.module.scss";

interface IAuthGoogle {
  location: string
}

export const AuthGoogle: React.FunctionComponent<IAuthGoogle> = ({location}) => {

  const GoogleImg = "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
  const handleAuthWithGoogle = () => {

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
