import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '@components/loader/Loader';
import AsyncComponent from '@components/async/AsyncComponent';

import './main.scss';

const container = document.createElement('div');
container.id = 'main';
document.body.appendChild(container);

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.loaderRef = React.createRef();
  }

  render() {
    return (
      <AsyncComponent
        Loading={() => {
          return (<Loader ref={this.loaderRef} />);
        }}
        resolve={() => 
          import('./App')
            .then(this.loaderRef.current.complete)}
      />
    );
  }
}

ReactDOM.render(<Main />, container);
