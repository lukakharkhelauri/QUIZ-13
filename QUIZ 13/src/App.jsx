import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from '../src/components/pages/Home';
import About from '../src/components/pages/About';
import Profile from '../src/components/pages/Profile';
import Error from '../src/components/pages/Error';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

