

import React from 'react';
import { Route, Routes as Switch} from 'react-router-dom';
import { Components } from '../../components/apps';
import { Hooks } from '../../hooks';
import { Providers } from '../../provider';
import { PATH } from '../../services/Path';
import { AuthPages } from './../Lazy';

const AuthRoutes: React.FunctionComponent = () => {
  const { token, user} = Providers.useAuth();
  const { actions } = Hooks.useRedirect();

  React.useEffect(() => {
    if(token && user){
      actions.goToHome();
    }    



  }, [token, user]);


  if(token) return <Components.Loader fullHeight={"50vh"} />

  return (
    <React.Fragment>

      <Switch>
        
        <Route path={PATH.AuthPath.login} element={<AuthPages.Login/>} />
        <Route path={PATH.AuthPath.register} element={<AuthPages.Register/>} />

      </Switch>
    </React.Fragment>
  )
}

export default AuthRoutes;