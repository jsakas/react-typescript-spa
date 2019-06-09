import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import Loader from '@components/loader/Loader';
import AsyncComponent from '@components/async/AsyncComponent';

import { Global } from '@emotion/core';

import * as theme from '@styles/variables';
import styles from './main.style.js';

const container = document.createElement('div');
container.id = 'main';
document.body.appendChild(container);

class Main extends Component {
  constructor(props) {
    super(props);

    this.loaderRef = React.createRef();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Global styles={styles} />
        <AsyncComponent
          Loading={() => {
            return (<Loader ref={this.loaderRef} />);
          }}
          resolve={() => 
            import('./App')
              .then(this.loaderRef.current.complete)}
        />
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<Main />, container);
