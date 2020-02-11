import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import Heading from "./Heading";

const useStyles = createUseStyles(theme => ({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15
  },
  [`@media (min-width: ${theme.breakpoint.s})`]: {
    container: {
      paddingLeft: 60,
      paddingRight: 60
    }
  },
  [`@media (min-width: ${theme.breakpoint.m})`]: {
    container: {
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 90,
      paddingRight: 90
    }
  },
  [`@media (min-width: ${theme.breakpoint.l})`]: {
    container: {
      paddingTop: 90,
      paddingBottom: 90,
      paddingLeft: 170,
      paddingRight: 170
    }
  },
  [`@media (min-width: ${theme.breakpoint.xl})`]: {
    container: {
      paddingTop: 90,
      paddingBottom: 90,
      paddingLeft: 300,
      paddingRight: 300
    }
  },
  secondary: {
    background: "#E5F3FF"
  },
  primary: {
    background: theme.logo.digitBlue.hex
  },
  flexStart: {
    display: "flex",
    flexWrap: "wrap"
  },
  flexEnd: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end"
  },
  center: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  spaceBetween: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  spaceAround: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  subtitle: {
    marginBottom: `${theme.spacing.component.xl.rem}rem`,
    textAlign: "center"
  }
}));

function Container({
  children,
  variant,
  background,
  title,
  subtitle,
  className: classNameProp,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <div
      className={clsx(classes.container, {
        [classes.secondary]: background === "secondary",
        [classes.primary]: background === "primary"
      })}
    >
      {title && <Heading>{title}</Heading>}
      {subtitle && (
        <p className={clsx(classes.subtitle, "zep-typo--normal-body2")}>
          {subtitle}
        </p>
      )}
      <div
        className={clsx(
          {
            [classes[variant]]: variant !== undefined
          },
          classNameProp
        )}
      >
        {children}
      </div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.bool
  ]),
  background: PropTypes.oneOf(["secondary", "primary", "inverse"]),
  variant: PropTypes.oneOf([
    "flexStart",
    "flexEnd",
    "center",
    "spaceBetween",
    "spaceAround"
  ])
};

export default Container;
