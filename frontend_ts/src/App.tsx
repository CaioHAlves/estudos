import React, { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes';
import { isAuthenticated } from './services/auth';
import { Navbar } from './components';
import './App.css';

function App() {
  const authenticated = isAuthenticated();

  return (
    <div className="App">
      <Router>
        <CssBaseline />
        {authenticated
          && <Navbar />}
        <Routes />
      </Router>
    </div>
  );
}

export default memo(App);
