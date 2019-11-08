import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';

import clsx from 'clsx';

import history from '@history';
import ROUTES from '@routes';

import useStyles from './App.style';

const getBaseRoute = (location: Location): string => location.pathname.split('/').filter(i => i)[0];

const App: React.FC = () => {
  const classes: Classes = useStyles();
  return (
    <Router history={history}>
      <Switch>
        <Route key={getBaseRoute(history.location)} render={({ location }) => {
          return (
            <TransitionGroup component={null}>
              <Transition key={`${history.location.pathname}--page`} timeout={1000}>
                {(state) => {
                  return (
                    <div className={clsx(classes.routeWrapper, classes[state])}>
                      <Switch location={location}>
                        {Object.keys(ROUTES).map((route) => {
                          const Page = ROUTES[route].component;
                          return (
                            <Route
                              exact
                              key={location.pathname}
                              path={ROUTES[route].path}
                              render={() => {
                                return (
                                  <div className={classes.pageWrapper}>
                                    <div className={classes.pageContent}>
                                      <Page />
                                    </div>
                                  </div>
                                );
                              }}
                            />
                          );
                        })}
                      </Switch>
                    </div>
                  );
                }}
              </Transition>
            </TransitionGroup>
          );
        }} />
      </Switch>
    </Router>
  );
};

export default App;
