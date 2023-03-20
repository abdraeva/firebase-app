

import React from 'react'
import { Link } from 'react-router-dom'
import { PATH } from '../../../services/Path'

interface INavigate {
  location: string
}
export const AuthNavigate: React.FunctionComponent<INavigate> = ({location}) => {
  return (
    <Link to={
      location === "singIn" 
      ? PATH.ConnectedAuthPath.register
      : PATH.ConnectedAuthPath.login
    }>
      {
        location === "signIn"
          ? "If you don't have an account?"
          : "Already have an account?"
      }
    </Link>
  )
}
