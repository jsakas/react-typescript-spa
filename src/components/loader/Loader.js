import React, { Component } from 'react';

import './Loader.scss';

export const LoaderIcon = () => {
  return (
    <div className="LoaderIcon"></div>
  );
};

export default class Loader extends Component {
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
      <div className="Loader">
        <div className={`Loader__icon ${this.state.status}`}>
          <LoaderIcon />
        </div>
      </div>
    );       
  }
}
