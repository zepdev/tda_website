import React from "react";
import { createUseStyles } from "react-jss";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import build1 from "../assets/build4.png";
import build2 from "../assets/build5.png";
import build3 from "../assets/build6.png";

const useStyles = createUseStyles(theme => ({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    alignItems: "center"
  },
  reverse: {
    flexDirection: "column"
  },
  background: {
    background: "#E5F3FF"
  },
  imgContainer: {
    flexBasis: "55%",
    height: 500,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    height: "50%"
  },
  flex: {
    flexBasis: "40%",
    marginBottom: `${theme.spacing.component.xl.rem}rem`
  },
  name: {
    color: theme.logo.digitBlue.hex,
    marginBottom: `${theme.spacing.component.s.rem}rem`,
    fontSize: 18
  },
  tagline: {
    marginBottom: `${theme.spacing.component.xl.rem}rem`
  },
  hidden: {
    display: "none"
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
      paddingRight: 90,
      flexDirection: "row"
    },
    imgContainer: {
      flexBasis: "40%",
      marginBottom: 0
    },
    flex: {
      flexBasis: "55%",
      marginBottom: 0
    },
    hidden: {
      display: "block"
    }
  },
  [`@media (min-width: ${theme.breakpoint.l})`]: {
    container: {
      paddingTop: 45,
      paddingBottom: 90,
      paddingLeft: 90,
      paddingRight: 90
    },
    imgContainer: {
      flexBasis: "55%"
    },
    flex: {
      flexBasis: "40%"
    }
  },
  [`@media (min-width: ${theme.breakpoint.xl})`]: {
    container: {
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 90,
      paddingRight: 90
    }
  }
}));

function Overview({ ...props }) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  return (
    <>
      <div className={clsx(classes.container, classes.background)}>
        <div className={classes.imgContainer}>
          <img src={build1} alt="builders 1" className={classes.img} />
        </div>
        <div className={classes.flex}>
          <p className={clsx(classes.name, "zep-typo--display-6")}>
            Analytics+
          </p>
          <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
            {t("analytics.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("analytics.overview")}</p>
        </div>
      </div>
      <div
        className={clsx(classes.container, classes.background, classes.reverse)}
      >
        <div className={classes.flex}>
          <h2 className={clsx(classes.name, "zep-typo--display-6")}>
            Use Cases
          </h2>
          <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
            {t("usecase.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("usecase.overview")}</p>
        </div>
        <div className={classes.imgContainer}>
          <img src={build2} alt="builders 2" className={classes.img} />
        </div>
      </div>
      <div className={clsx(classes.container, classes.background)}>
        <div className={classes.imgContainer}>
          <img src={build3} alt="builders 3" className={classes.img} />
        </div>
        <div className={classes.flex}>
          <h2 className={clsx(classes.name, "zep-typo--display-6")}>FleetX</h2>
          <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
            {t("fleetx.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("fleetx.overview")}</p>
        </div>
      </div>
    </>
  );
}

export default Overview;
