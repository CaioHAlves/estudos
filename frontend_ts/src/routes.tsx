import React from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { LoginWithUnform, Home} from './pages'
import { isAuthenticated } from './services/auth'
import './App.css'
import { useTranslation } from "react-i18next";
import './i18n'

interface PrivateRouteProps {
  component: any
  path?: string
  exact?: boolean
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props

  return (
    <Route
      {...rest}
      render={(routerProps) =>
        isAuthenticated() ?
          <Component {...routerProps} />
          : <Redirect to='/' />
      }
    />
  )
}

export default function Routes() {

  const authenticated = isAuthenticated()
  const { i18n } = useTranslation();
  const local = useLocation()
  
  const pathName = local.pathname
  const languageDefault = navigator.language;

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language)
  };

  React.useEffect(() => {
    changeLanguage(languageDefault)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageDefault])

  return (
    <div className="Content">
      {
        authenticated && pathName === '/'
          ? <Redirect to='/home' />
          : !authenticated && <Redirect to='/' />
      }

      <>
        <Switch>
          <Route path="/" exact component={LoginWithUnform} />
          <PrivateRoute path="/home" exact={true} component={Home} />
          {/* <Route path="/register" exact component={Register}/>
          <PrivateRoute path="/tasks" exact component={Tasks}/>
          <PrivateRoute path="/scanner" exact component={ScannBarcodes}/>
          <PrivateRoute path="/finances" exact component={Finances}/> */}
        </Switch>
      </>
    </div>
  )
}