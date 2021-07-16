import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageLoader from './Components/PageLoader'

import store from './store';
import { Provider } from 'react-redux';

const PersonalFiles = lazy(() => import('./pages/fileManager/PersonalFiles/index'));
const DataRoom = lazy(() => import('./pages/fileManager/DataRoom/index'));
const RecentFiles = lazy(() => import('./pages/fileManager/RecentFiles/index'));
const SharedFiles = lazy(() => import('./pages/fileManager/SharedFiles/index'));
const Favourite = lazy(() => import('./pages/fileManager/Favourite/index'));
const Trash = lazy(() => import('./pages/fileManager/Trash/index'));
const Admin = lazy(() => import('./pages/fileManager/Admin/index'));
const Users=lazy(() => import('./pages/fileManager/Admin/Users/Users'));
const Devices=lazy(() => import('./pages/fileManager/Admin/Devices/Devices'));
const Access=lazy(() => import('./pages/fileManager/Admin/Access/Access'));
const Settings = lazy(() => import('./pages/fileManager/Settings/index'));
const Login = lazy(() => import('./pages/login/index'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Modals = lazy(() => import('./pages/fileManager/Modals/Modals'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/personal" exact>
              <PersonalFiles />
            </Route>
            <Route path="/room" exact>
              <DataRoom />
            </Route> 
            <Route path="/recent" exact>
              <RecentFiles />
            </Route>
            <Route path="/shared" exact>
              <SharedFiles />
            </Route>
            <Route path="/favourite" exact>
              <Favourite />
            </Route>         
            <Route path="/trash" exact>
              <Trash />
            </Route>   
            <Route path="/admin" exact>
              <Admin />
            </Route>   
            <Route path="/settings" exact>
              <Settings />
            </Route>   
            <Route path="/admin/users" exact>
              <Users />
            </Route>   
            <Route path="/admin/devices" exact>
              <Devices />
            </Route>   
            <Route path="/admin/access" exact>
              <Access />
            </Route> 
            <Route path="/modals" exact>
              <Modals />
            </Route>  
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
