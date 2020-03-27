import React from "react"
import { makeStyles } from "@material-ui/styles"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import build1 from "../assets/analytics.svg"
import build3 from "../assets/fleetx.svg"
import build2 from "../assets/usecase.svg"
import build4 from "../assets/learn.svg"
import Container from "./Container"
import Hidden from "@material-ui/core/Hidden"

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 90,
      paddingRight: 90,
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: 45,
      paddingBottom: 90,
      paddingLeft: 90,
      paddingRight: 90,
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 90,
      paddingRight: 90,
    },
  },
  reverse: {
    flexDirection: "column",
  },
  background: {
    background: "#E5F3FF",
  },
  imgContainer: {
    flexBasis: "50%",
    height: 400,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%",
      marginBottom: 0,
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "55%",
    },
  },
  imgReverse: {
    width: "100%",
    marginLeft: 30,
    marginRight: 0,
  },
  img: {
    width: "100%",
    marginLeft: 0,
    marginRight: 30,
  },
  flex: {
    flexBasis: "100%",
    alignSelf: "center",
    marginBottom: `${theme.space.xl.rem}rem`,
    [theme.breakpoints.up("md")]: {
      flexBasis: "45%",
      marginBottom: 0,
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "40%",
    },
  },
  name: {
    color: theme.blue.primary,
    marginBottom: `${theme.space.s.rem}rem`,
    fontSize: 18,
  },
  tagline: {
    marginBottom: `${theme.space.xl.rem}rem`,
  },
  hidden: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  button: {
    marginTop: 30,
  },
}))

function Overview({ ...props }) {
  const classes = useStyles(props)
  const { t } = useTranslation()

  return (
    <>
      <Container variant="spaceBetween">
        <div className={classes.flex}>
          <h2 className={clsx(classes.name, "zep-typo--display-6")}>
            {t("learning.title")}
          </h2>
          <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
            {t("learning.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("learning.overview")}</p>
          <a
            href="https://www.youtube.com/channel/UC2u2sfQd55nIyrG_9nDP_bg?disable_polymer=true"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx("zep-button zep-button-primary", classes.button)}
          >
            {t("learning.button")}
          </a>
        </div>
        <Hidden smDown>
          <div className={classes.imgContainer}>
            <img src={build4} alt="builders 4" className={classes.imgReverse} />
          </div>
        </Hidden>
      </Container>
      <Container variant="spaceBetween">
        <Hidden smDown>
          <div className={classes.imgContainer}>
            <img src={build1} alt="builders 1" className={classes.img} />
          </div>
        </Hidden>
        <div className={classes.flex}>
          <p className={clsx(classes.name, "zep-typo--display-6")}>
            Analytics+
          </p>
          <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
            {t("analytics.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("analytics.overview")}</p>
        </div>
      </Container>
      <Container variant="spaceBetween">
        <div className={classes.flex}>
          <h2 className={clsx(classes.name, "zep-typo--display-6")}>
            Use Cases
          </h2>
          <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
            {t("usecase.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("usecase.overview")}</p>
        </div>
        <Hidden smDown>
          <div className={classes.imgContainer}>
            <img src={build2} alt="builders 2" className={classes.imgReverse} />
          </div>
        </Hidden>
      </Container>
      <Container variant="spaceBetween">
        <Hidden smDown>
          <div className={classes.imgContainer}>
            <img src={build3} alt="builders 3" className={classes.img} />
          </div>
        </Hidden>
        <div className={classes.flex}>
          <h2 className={clsx(classes.name, "zep-typo--display-6")}>FleetX</h2>
          <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
            {t("fleetx.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("fleetx.overview")}</p>
        </div>
      </Container>
    </>
  )
}

export default Overview

{
  //FOR BIG PICS IN FUTURE
  /* <div className={clsx(classes.container, classes.background)}>
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
</div> */
}
