

import React from 'react'
import { Route, Routes as Switch} from 'react-router-dom';
import { AdminComponents } from '..';
import { Routers } from '../../../pages';
import { PATH } from '../../../services/Path';
import { Providers } from './../../../provider/index';

const AdminLayout: React.FC<any> = () => {









  return (
    <React.Fragment>
      <section className="admin-layout">
        <aside>
          <AdminComponents.SideBar/>

        </aside>
        <main>
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path={PATH.AdminPath.profile} element={<h1>Profile</h1>} /> 
              <Route path={PATH.AdminPath.category} element={<h1>Category</h1>} /> 
              <Route path={PATH.AdminPath.products} element={<h1>Products</h1>} /> 
              <Route path={PATH.AdminPath.contacts} element={<h1>Contacts</h1>} /> 
            </Switch>
          </React.Suspense>

        </main>
      </section>

    </React.Fragment>
  )
}

export default AdminLayout;