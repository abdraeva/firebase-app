import React from "react";


 const Login = React.lazy(() => import("../apps/auth/login/Login"));

 const Register = React.lazy(() => import("../apps/auth/register/Register"));


// AuthPage

export const AuthPages = {
  Register,
  Login,
};

// LayoutPage

const Main = React.lazy(() => import("../apps/layout/main/Main"));

const Profile = React.lazy(() => import("../apps/layout/profile/Profile"));

const Products = React.lazy(() => import("../apps/layout/products/Products"));

export const LayoutPages = {
  Main,
  Profile,
  Products
};