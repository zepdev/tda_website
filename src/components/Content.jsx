import React from "react";
import { createUseStyles } from "react-jss";
import Overview from "./Overview";
import Team from "./Team";
import Process from "./Process";
import Departments from "./Departments";
import PastCases from "./PastCases";

const useStyles = createUseStyles(theme => ({
  root: {
    flexBasis: "100%"
  }
}));

function Content({ ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Overview />
      <Departments />
      <Process />
      <PastCases />
      <Team />
    </div>
  );
}

export default Content;
