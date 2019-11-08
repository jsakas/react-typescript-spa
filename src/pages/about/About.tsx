import React from 'react';
import useStyles from './About.style';

const About = () => {
  const classes: Classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1>TypeScript / React / Webpack SPA Boilerplate</h1>
      </div>
    </div>
  );
};

export default About;
