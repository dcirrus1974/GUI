import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import PageLoader from './components/PageLoader'

const PersonalFiles = lazy(() => import('./pages/file_manager/Personal_Files'))
const DataRoom=lazy(()=>import('./pages/file_manager/Data_Room'))
const RecentFiles=lazy(()=>import('./pages/file_manager/Recent_Files'))
const SharedFiles=lazy(()=>import('./pages/file_manager/Shared_Files'))
const Favourite=lazy(()=>import('./pages/file_manager/Favourite'))
const Trash=lazy(()=>import('./pages/file_manager/Trash'))
const Admin=lazy(()=>import('./pages/file_manager/Admin'))
const Settings=lazy(()=>import('./pages/file_manager/Settings'))
const Login=lazy(()=>import('./pages/login'))

const NotFound = lazy(() => import('./pages/NotFound'))


const App: React.FC = () => {

  return (
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
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default React.memo(App)
