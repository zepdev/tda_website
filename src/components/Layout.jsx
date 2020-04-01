import React, { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { Link, animateScroll as scroll, Element } from "react-scroll"
import CookieConsent from "react-cookie-consent"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Header from "./Header"
import Footer from "./Footer"
import background from "../assets/background.png"
import tdaLogo from "../assets/tdaLogo.png"
import ArrowDown from "./icons/ArrowDown"
import "../i18n/i18n"
import "../app.css"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: theme.color.global.white,
    minHeight: "100%",
  },
  body: {
    flex: 1,
  },
  container: {
    position: "absolute",
    height: 200,
    top: "25%",
    margin: "0 30px",
    [theme.breakpoints.up("sm")]: {
      width: 300,
      top: "55%",
      left: "65%",
      transform: "translate(-55%, -65%)",
    },
    [theme.breakpoints.up("md")]: {
      width: 400,
      top: "55%",
      left: "65%",
      transform: "translate(-55%, -65%)",
    },
  },
  top: {
    position: "relative",
    height: "100vh - 80",
  },
  img: {
    zIndex: -5,
    left: 0,
    top: 0,
    width: "100%",
    objectFit: "cover",
    height: "100vh",
    marginTop: -80,
  },
  iconButton: {
    background: "transparent",
    "&:hover": {
      background: "transparent",
    },
    "&:active": {
      background: "transparent",
    },
    "&:focus": {
      background: "transparent",
    },
  },
  iconButtonDown: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: `${theme.space.xl.rem * 2}rem`,
    marginBottom: `${theme.space.xl.rem}rem`,
  },
  iconButtonUp: {
    position: "fixed",
    bottom: 0,
    right: 0,
    marginRight: `${theme.space.xl.rem * 2}rem`,
    marginBottom: `${theme.space.xl.rem * 2}rem`,
  },
  hidden: {
    display: "none",
  },
  icon: {
    color: theme.color.global.black,
    width: 42,
    height: 42,
    "&:hover": {
      color: theme.logo.digitBlue,
    },
  },
  iconUp: {
    transform: "rotate(180deg)",
  },
}))

const useHideOnScroll = () => {
  const prevScrollY = useRef()
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setIsHidden(isHidden => {
        const scrolledDown = window.scrollY < 280
        if (scrolledDown && !isHidden) {
          return true
        } else if (!scrolledDown && isHidden) {
          return false
        } else {
          prevScrollY.current = window.scrollY
          return isHidden
        }
      })
    }

    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return isHidden
}

const Layout = ({ location, children }) => {
  const classes = useStyles()
  const { i18n } = useTranslation()
  const [lang, setLang] = useState("en")
  const isHidden = useHideOnScroll()

  const handleSetLang = language => {
    i18n.changeLanguage(language)
    setLang(language)
  }

  const handleOptOut = () => {
    const disableStr = "GTM-optout"
    document.cookie =
      disableStr + "=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/"
    window[disableStr] = true
  }

  return (
    <div className={clsx(classes.root, "theme-blue")}>
      <Header lang={lang} handleSetLang={handleSetLang} />
      <div className={classes.top}>
        <img
          src={background}
          className={classes.img}
          alt="geometric print background"
        />
        <div className={classes.container}>
          <img src={tdaLogo} alt="logo" />
        </div>
        <Link to="section1" smooth={true} offset={0} duration={1000}>
          <IconButton
            className={clsx(classes.iconButton, classes.iconButtonDown)}
          >
            <ArrowDown alt="arrow down" className={classes.icon} />
          </IconButton>
        </Link>
      </div>
      <div className={classes.body}>
        <Element name="section1"></Element>
        <main>{children}</main>
        <IconButton
          className={clsx(classes.iconButton, classes.iconButtonUp, {
            [classes.hidden]: isHidden,
          })}
          onClick={() => scroll.scrollToTop({ duration: 1500, smooth: true })}
        >
          <ArrowDown
            alt="arrow down"
            className={clsx(classes.icon, classes.iconUp)}
          />
        </IconButton>
      </div>
      <CookieConsent
        location="bottom"
        enableDeclineButton
        onDecline={() => handleOptOut()}
        declineButtonText="decline"
        setDeclineCookie
        declineButtonStyle={{
          color: "#0066FF",
          fontSize: "14px",
          textTransform: "uppercase",
          background: "transparent",
          letterSpacing: 1.5,
        }}
        buttonText="Accept"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: "#C4DCFF", color: "#000" }}
        buttonStyle={{
          background: "#0066FF",
          color: "#fff",
          fontSize: "14px",
          padding: "14px 24px",
          borderRadius: 3,
          lineHeight: "1.25rem",
          textTransform: "uppercase",
          letterSpacing: "1.25px",
          fontFamily: '"Roboto", sans-serif,',
          fontWeight: 500,
        }}
        expires={150}
      >
        Zeppelin uses cookies on its pages to enable you to make optimal use of
        the page. If you agree, just continue visiting the site. To learn more
        or opt our, read our{" "}
        <Link
          to="/content/privacy/"
          style={{ color: "#0066FF", textDecoration: "underline" }}
        >
          data privacy policy.
        </Link>
      </CookieConsent>
      <Footer />
    </div>
  )
}

export default Layout
