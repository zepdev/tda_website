import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import Input from "@zlab-de/zel-react/Input"
import Snackbar from "@material-ui/core/Snackbar"
import CircularProgress from "@material-ui/core/CircularProgress"
import Button from "@zlab-de/zel-react/Button"
import Notification from "@zlab-de/zel-react/Notification"

const useStyles = makeStyles(theme => ({
  container: { textAlign: "center", width: "100%" },
  text: {
    marginBottom: 0,
  },
  button: {
    padding: `${theme.space.xl.rem}rem`,
    background: theme.blue.primary,
    color: theme.color.global.white,
    "&:hover": {
      background: "#3b89ff",
    },
  },
  form: {
    padding: `${theme.space.l.rem}rem`,
  },
  input: {
    marginBottom: `${theme.space.l.rem}rem`,
  },
  buttonSend: {
    background: theme.blue.primary,
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    color: theme.blue.primary,
    paddingLeft: 3,
    marginBottom: `${theme.space.xl.rem}rem`,
  },
}))

function Contact({ ...props }) {
  const classes = useStyles(props)
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isEmailValid, setEmailValid] = useState(true)
  const [isNameValid, setNameValid] = useState(true)
  const [isMessageValid, setMessageValid] = useState(true)
  const [isTouched, setTouched] = useState(false)
  const [isSnackbarOpen, setSnackbar] = useState(false)
  const [notification, setNotification] = useState("success")
  const [isLoading, setLoading] = useState(false)

  const handleChange = name => event => {
    if (!isTouched) {
      setTouched(true)
    }
    if (name === "email") {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      if (!pattern.test(event.target.value)) {
        setEmailValid(false)
        setEmail(event.target.value)
      } else {
        setEmailValid(true)
        setEmail(event.target.value)
      }
    }
    if (name === "name") {
      if (event.target.value.length > 500) {
        setNameValid(false)
      } else {
        setNameValid(true)
        setName(event.target.value)
      }
    }
    if (name === "message") {
      if (event.target.value.length > 1000) {
        setMessageValid(false)
      } else {
        setMessageValid(true)
        setMessage(event.target.value)
      }
    }
  }

  const handleSubmit = () => {
    setLoading(true)
    if (
      isEmailValid &&
      isMessageValid &&
      message.length > 0 &&
      isNameValid &&
      isTouched
    ) {
      fetch("https://formspree.io/xpzdnjbw", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          emailAddress: email,
          name: name,
        }),
      })
        .then(response => {
          if (response.status === 200) {
            setSnackbar(true)
            setNotification("success")
            setEmail("")
            setMessage("")
            setName("")
            setLoading(false)
          } else {
            setSnackbar(true)
            setNotification("danger")
            setLoading(false)
          }
        })
        .catch(err => {
          setSnackbar(true)
          setNotification("danger")
          setLoading(false)
        })
    } else {
      setSnackbar(true)
      setNotification("warning")
      setLoading(false)
    }
  }

  return (
    <div className={classes.container}>
      <p className={clsx(classes.text, "zep-typo--normal-body1")}>
        {t("contact.text")}
      </p>
      <div className={classes.textContainer}>
        <p className={clsx(classes.text, "zep-typo--normal-caption")}>
          {t("contact.dataProtection")}
        </p>
        <a className={clsx(classes.link, "zep-typo--normal-caption")}>
          {`${t("contact.dataProtectionStatement")}`}
        </a>
      </div>
      <Button
        className={classes.button}
        variant="primary"
        onClick={() => setOpen(true)}
      >
        {t("contact.button")}
      </Button>
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="contact-form"
        open={open}
        maxWidth="md"
        fullWidth={true}
      >
        <DialogTitle id="contact-form-title">{t("contact.button")}</DialogTitle>
        <form noValidate autoComplete="off" className={classes.form}>
          <div className={classes.inputContainer}>
            <Input
              id="name"
              label={t("contact.name")}
              type="text"
              className={classes.input}
              value={name}
              placeholder={t("contact.name")}
              onChange={handleChange("name")}
              required
              error={!isNameValid}
            />
            <Input
              id="email"
              label={t("contact.email")}
              type="text"
              className={classes.input}
              value={email}
              placeholder={t("contact.email")}
              onChange={handleChange("email")}
              required
              error={!isEmailValid}
            />
          </div>
          <Input
            label={t("contact.message")}
            id="message"
            type="text"
            className={classes.input}
            value={message}
            placeholder={t("contact.message")}
            onChange={handleChange("message")}
            required
            error={!isMessageValid}
          />
          {isLoading ? (
            <CircularProgress size={24} className={classes.progress} />
          ) : (
            <Button
              variant="primary"
              className={classes.buttonSend}
              fullWidth
              onClick={handleSubmit}
            >
              {t("contact.send")}
            </Button>
          )}
        </form>
      </Dialog>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbar(false)}
      >
        <Notification variant={notification}>
          {notification === "success"
            ? "Your email has been sent successfully"
            : notification === "warning"
            ? "Please check the form has been filled out correctly"
            : "An error has occurred."}
        </Notification>
      </Snackbar>
    </div>
  )
}

export default Contact
