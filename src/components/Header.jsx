import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import ZeppelinIcon from './icons/ZeppelinIcon';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'transparent',
    zIndex: 200,
    padding: `${theme.space.m.rem}rem ${theme.space.xl.rem * 2}rem`
  },
  button: {
    textTransform: 'uppercase'
  },
  logo: {
    color: theme.color.global.black,
    width: 100
  },
  [`@media (min-width: ${theme.breakpoint.xs})`]: {
    logo: {
      width: 150
    }
  }
}));

function Header({ handleSetLang, lang, ...props }) {
  const classes = useStyles(props);
  return (
    <header className={classes.header}>
      <ZeppelinIcon className={classes.logo} />
      <button
        onClick={handleSetLang}
        className={clsx(classes.button, 'zep-typo--display-5', 'zep-button')}
      >
        {lang}
      </button>
    </header>
  );
}

export default Header;
