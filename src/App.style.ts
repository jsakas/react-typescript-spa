import { createUseStyles } from 'react-jss';

import { animateOnce } from '@styles/mixins';

export default createUseStyles({
  routeWrapper: {
    width: '100%',
    height: '100%',
  },
  pageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
    padding: '2rem 2rem 4rem 2rem',
    position: 'relative',
  },
  pageContent: {
    width: '100%',
  },
  entered: {
    ...animateOnce('$page-enter', '1s'),
    overflow: 'hidden',
  },
  exiting: {
    ...animateOnce('$page-exit', '1s'),
    overflow: 'hidden',
  },
  '@keyframes page-enter': {
    '0%': {
      top: '-2rem',
      opacity: 0,
    },

    '100%': {
      top: '0rem',
      opacity: 1,
    }
  },

  '@keyframes page-exit': {
    '0%': {
      top: '0rem',
      opacity: 1,
    },

    '50%': {
      top: '5rem',
      opacity: 0,
    },

    '100%': {
      top: '5rem',
      opacity: 0,
    }
  }
});