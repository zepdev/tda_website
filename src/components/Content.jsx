import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Overview from './Overview';
import Team from './Team';
import Process from './Process';
import Departments from './Departments';
import PastCases from './PastCases';

const useStyles = makeStyles(theme => ({
  root: {
    flexBasis: '100%'
  }
}));

function Content({ ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Overview />
      <Process />
      <Departments />
      <PastCases />
      <Team />
    </div>
  );
}

export default Content;
