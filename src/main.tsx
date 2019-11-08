import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Loader from '@components/loader/Loader';
import AsyncComponent from '@components/async/AsyncComponent';
import { ThemeProvider } from 'react-jss';

import createGlobalStyles from './main.style';
import theme from '@styles/theme';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}>
        <AsyncComponent
          Loading={() => (<Loader />)}
          Errored={() => (<span>Something has gone wrong.</span>)}
          onComplete={console.log}
          onError={console.error}
          resolve={() => import('./App').then((module) => {
            return new Promise(resolve => {
              // simulate three seconds of loading
              setTimeout(() => resolve(module), 3000);
            });
          })}
        />
      </div>
    </ThemeProvider>
  );
};

document.head.appendChild(document.createElement('style')).textContent = createGlobalStyles(theme);

const container = document.createElement('div');
container.id = 'main';
document.body.appendChild(container);

ReactDOM.render(
  <Main />,
  container
);
