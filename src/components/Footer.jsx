import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles(theme => ({
  footer: {
    textAlign: "center",
    flexShrink: 0,
    color: theme.color.gray.white.hex,
    background: theme.logo.digitBlue.hex,
    padding: `${theme.spacing.component.s.rem}rem`
  }
}));

function Footer({ ...props }) {
  const classes = useStyles(props);
  return (
    <footer className={clsx(classes.footer, "zep-typo--normal-body1")}>
      <p>&copy; Zeppelin</p>
    </footer>
  );
}

export default Footer;
