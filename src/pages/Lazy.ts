import React from "react";


 const Login = React.lazy(() => import("../apps/auth/login/Login"));

 const Register = React.lazy(() => import("../apps/auth/register/Register"));


export const AuthPages = {
  Register,
  Login
}