import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: 'center',
    flexShrink: 0,
    color: theme.color.global.white,
    background: theme.blue.primary,
    padding: `${theme.space.s.rem}rem`
  }
}));

function Footer({ ...props }) {
  const classes = useStyles(props);
  return (
    <footer className={clsx(classes.footer, 'zep-typo--normal-body1')}>
      <p>&copy; Zeppelin</p>
    </footer>
  );
}

export default Footer;
