import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@zlab-de/zel-react/List"
import ListItem from "@zlab-de/zel-react/ListItem"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import Container from "./Container"
import magicTriangleDe from "../assets/magicTriangleDe.png"
import magicTriangleEn from "../assets/magicTriangleEn.png"

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
    },
  },
  textContainer: {
    flexBasis: "100%",
    marginBottom: `${theme.space.xl.rem}rem`,
    [theme.breakpoints.up("md")]: {
      flexBasis: "49%",
      mariginBottom: 0,
    },
  },
  imgContainerXS: {
    flexBasis: "100%",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  imgContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      flexBasis: "49%",
      textAlign: "center",
      display: "block",
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
  text: {
    marginBottom: `${theme.space.m.rem}rem`,
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
  },
  xs: {
    display: "none",
  },
  img: {
    width: "90%",
  },
}))

function Overview({ ...props }) {
  const classes = useStyles(props)
  const { t, i18n } = useTranslation()

  return (
    <Container variant="spaceBetween" className={classes.container}>
      <div className={classes.imgContainer}>
        <img
          src={i18n.language === "de" ? magicTriangleDe : magicTriangleEn}
          alt="magic triangle"
          className={classes.img}
        />
      </div>
      <div className={classes.textContainer}>
        <p className={clsx(classes.name, "zep-typo--display-6")}>
          Team Data Analytics
        </p>
        <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
          {t("header.what")}
        </p>
        <p className={clsx(classes.text, "zep-typo--normal-body1")}>
          {t("overview.visionText")}
        </p>
        <List>
          <ListItem>{t("overview.who")}</ListItem>
          <ListItem>{t("overview.what")}</ListItem>
          <ListItem>{t("overview.why")}</ListItem>
          <ListItem>{t("overview.how")}</ListItem>
        </List>
      </div>
      <div className={classes.imgContainerXS}>
        <img
          src={i18n.language === "de" ? magicTriangleDe : magicTriangleEn}
          alt="magic triangle"
          className={classes.img}
        />
      </div>
    </Container>
  )
}

export default Overview
