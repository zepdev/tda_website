import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useTranslation } from "react-i18next";
import background from "./assets/background.png";
import logo from "./assets/fullLogo.png";
import Button from "@zlab-de/zel-react/Button";
import Input from "@zlab-de/zel-react/Input";
import clsx from "clsx";

const useStyles = createUseStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: theme.color.gray.white.hex,
    minHeight: "100%"
  },
  body: {
    flex: 1
  },
  container: {
    position: "absolute",
    top: "25%",
    left: "30%",
    transform: "translate(-25%, -30%)"
  },
  top: {
    position: "relative",
    height: 270
  },
  img: {
    zIndex: -5,
    left: 0,
    top: 0,
    width: "100%",
    objectFit: "cover",
    height: 350,
    marginTop: -80
  },
  [`@media (min-width: ${theme.breakpoint.m})`]: {
    top: {
      height: 620
    },
    img: {
      height: 700
    },
    container: {
      top: "55%",
      left: "65%",
      transform: "translate(-55%, -65%)"
    }
  },
  [`@media (min-width: ${theme.breakpoint.xl})`]: {
    top: {
      height: 720
    },
    img: {
      height: 800
    }
  }
}));

function App() {
  const classes = useStyles();
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState("en");
  const [loggedIn, setLogin] = useState(
    process.env.NODE_ENV === "development" ? true : true
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSetLang = () => {
    let language = lang === "en" ? "de" : "en";
    i18n.changeLanguage(language);
    setLang(language);
  };

  const handleLogin = value => {
    if (
      password === process.env.REACT_APP_PASSWORD &&
      username === process.env.REACT_APP_USERNAME
    ) {
      setLogin(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className={classes.root}>
      <Header lang={lang} handleSetLang={handleSetLang} />
      <div className={classes.top}>
        <img
          src={background}
          className={classes.img}
          alt="geometric print background"
        />
        <div className={classes.container}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={classes.body}>
        {loggedIn ? (
          <Content />
        ) : (
          <div className={classes.loginContainer}>
            <div className={classes.login}>
              <h1 className={clsx(classes.loginHeader, "zep-typo--display-5")}>
                {t("user.login")}
              </h1>
              <form noValidate autoComplete="off">
                <div className={classes.inputContainer}>
                  <Input
                    id="username"
                    label={t("form.username")}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                    error={error}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Input
                    id="password"
                    label={t("form.password")}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    error={error}
                  />
                </div>
              </form>
              <Button variant="primary" fullWidth onClick={handleLogin}>
                {t("form.submit")}
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
