import { createUseStyles } from 'react-jss';
import { animateLoop } from '@styles/mixins';

export default createUseStyles((theme: Theme )=> {
  return {
    wrapper: {

    },
    icon: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      opacity: 1,
      transition: 'opacity .5s',
      borderRadius: '50%',
      borderTop: `2px solid ${theme.colors.primary}`,
      borderRight: `2px solid ${theme.colors.primary}`,
      borderBottom: `2px solid ${theme.colors.primary}`,
      borderLeft: '2px solid rgba(0, 0, 0, 0)',
      ...animateLoop('$spin', '1s'),
    },
    complete: {
      opacity: 0,
    },
    '@keyframes spin': {
      from: {
        transform: 'rotateZ(0deg)',
      },
      to: {
        transform: 'rotateZ(360deg)',
      }
    },
  };
});
