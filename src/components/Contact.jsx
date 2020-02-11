import React from "react";
import { createUseStyles } from "react-jss";
import { useTranslation } from "react-i18next";
import Button from "@zlab-de/zel-react/Button";
import clsx from "clsx";

const useStyles = createUseStyles(theme => ({
  container: { textAlign: "center", width: "100%" },
  text: {
    marginBottom: `${theme.spacing.component.xl.rem}rem`
  },
  button: {
    background: theme.logo.digitBlue.hex,
    color: theme.color.gray.white.hex
  }
}));

function Contact({ ...props }) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <p className={clsx(classes.text, "zep-typo--normal-body1")}>
        {t("contact.text")}
      </p>
      <Button className={classes.button} variant="primary">
        {t("contact.button")}
      </Button>
    </div>
  );
}

export default Contact;
