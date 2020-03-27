import React from "react"
import { makeStyles } from "@material-ui/styles"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import Link from "./Link"

const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: "center",
    flexShrink: 0,
    color: theme.color.global.white,
    background: theme.blue.primary,
    padding: `${theme.space.s.rem}rem`,
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    color: theme.color.global.white,
    padding: "0 10px",
  },
}))

function Footer({ ...props }) {
  const classes = useStyles(props)
  const { t } = useTranslation()
  return (
    <footer className={clsx(classes.footer, "zep-typo--normal-body1")}>
      <div className={classes.linkContainer}>
        <Link className={classes.link}>{t("legal")}</Link>|
        <Link className={classes.link}>{t("data")}</Link>|
        <Link className={classes.link}>{t("imprint")}</Link>
      </div>
      <p>&copy; Zeppelin</p>
    </footer>
  )
}

export default Footer
