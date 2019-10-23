import React, { useState, useEffect } from 'react';
import Home from './Home';
import About from './About';
import CreateEvent from './CreateEvents';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';

const App = () => {
  const [newEvent, setNewEvent] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const handleOnCreate = value => {
    setNewEvent(value);
    setRedirect(!redirect);
  };
  useEffect(() => {
    setRedirect(false);
  }, [newEvent]);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/create-event"
          component={() => (
            <CreateEvent handleOnCreate={handleOnCreate} redirect={redirect} />
          )}
        />
      </Switch>
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
