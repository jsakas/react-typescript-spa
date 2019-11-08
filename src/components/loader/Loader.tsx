import React from 'react';
import useStyles from './Loader.style';

const Loader = () => {
  const classes: Classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.icon} />
    </div>
  );
};

export default Loader;
