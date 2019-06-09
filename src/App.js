import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import history from '@history';
import ROUTES from '@routes';
import './App.scss';

const getBaseRoute = location => location.pathname.split('/').filter(i => i)[0];

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route>
            <div className="App">
              <Route key={getBaseRoute(history.location)} render={({ location }) => {
                return (
                  <TransitionGroup component={null}>

                    <Transition key={`${history.location.pathname}--page`} timeout={1000}>
                      {(state) => {
                        return (
                          <div className={`App__page App__page-transition App__page-transition--${state} App__page--gradient-mask`}>
                            <Switch location={location}>
                              {Object.keys(ROUTES).map((route) => {
                                let Page = ROUTES[route].component;
                                return (
                                  <Route 
                                    exact
                                    key={location.pathname}
                                    path={ROUTES[route].path} 
                                    render={() => {
                                      return (
                                        <div className="App__page-wrapper">
                                          <div className="App__page-content">
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
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
