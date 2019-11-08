import { createUseStyles } from 'react-jss';

export default createUseStyles((theme: Theme) => ({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font_primary,
    flexDirection: 'column',
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font_primary,
    flexDirection: 'column',
    position: 'absolute',
  }
}));
