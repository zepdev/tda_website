import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles(theme => ({
  header: {
    textAlign: "center",
    marginBottom: `${theme.spacing.component.xl.rem * 2}rem`
  }
}));

function Heading({ children, ...props }) {
  const classes = useStyles(props);
  return (
    <h2 className={clsx(classes.header, "zep-typo--display-4")}>{children}</h2>
  );
}

export default Heading;
