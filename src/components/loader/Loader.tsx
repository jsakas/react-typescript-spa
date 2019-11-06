import React, { Component, Fragment } from 'react';
import { Global } from '@emotion/core';
import styles from './Loader.style.js';

export const LoaderIcon = () => {
  return (
    <div className="LoaderIcon"></div>
  );
};

class Loader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'started',
    };
  }

  complete = (x) => new Promise(resolve => {
    const timedResolver = () => setTimeout(() => resolve(x), 2000);

    this.setState({
      status: 'complete',
    }, timedResolver);
  })

  render() {
    return (
      <Fragment>
        <Global styles={styles} />
        <div className="Loader">
          <div className={`Loader__icon ${this.state.status}`}>
            <LoaderIcon />
          </div>
        </div>
      </Fragment>
    );       
  }
}

export default Loader;
