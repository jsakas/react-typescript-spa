import React, { Component } from 'react';

import withStyles from '@utils/withStyles';
import styles from './About.style.js';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About__content">
          <h1>React / Webpack SPA Boilerplate</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);
