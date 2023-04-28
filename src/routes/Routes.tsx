import React from 'react'
import {Route, Routes as Switch } from "react-router-dom";
import { Components } from '../components/apps';
import { Routers } from '../pages';
import { PATH } from './../services/Path';



const Routes: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Components.Header/>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path={PATH.MainPath.layout} element={<Routers.LayoutRoutes/>} /> 
          <Route path={PATH.MainPath.auth} element={<Routers.AuthRoutes/>} /> 

        </Switch>
      </React.Suspense>
    </React.Fragment>
  )
}

export default Routes;