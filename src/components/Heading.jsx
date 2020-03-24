import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    marginBottom: `${theme.space.xl.rem * 2}rem`
  }
}));

function Heading({ children, ...props }) {
  const classes = useStyles(props);
  return (
    <h2 className={clsx(classes.header, 'zep-typo--display-4')}>{children}</h2>
  );
}

export default Heading;
