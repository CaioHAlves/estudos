import React from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { Home, ScannBarcodes, LoginWithUnform, Register, Finances, Tasks } from './pages'
import { isAuthenticated } from './services/auth'
import './App.css'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ?
         <Component {...props} />
        : <Redirect to='/scanner' />
    }
  />
)

export default function Routes() {

  const authenticated = isAuthenticated()

  const local = useLocation()
  const pathName = local.pathname

  return (
    <>
      {
        authenticated && pathName === '/' 
        ? <Redirect to='/home'/> 
        : !authenticated && <Redirect to='/scanner'/>
      }

      <main className="Content">
        <Switch>
          <Route path="/" exact component={LoginWithUnform} />
          <Route path="/register" exact component={Register}/>
          <PrivateRoute path="/home" exact component={Home} />
          <PrivateRoute path="/tasks" exact component={Tasks}/>
          <Route path="/scanner" exact component={ScannBarcodes}/>
          <PrivateRoute path="/finances" exact component={Finances}/>
        </Switch>
      </main>
    </>
  )
}