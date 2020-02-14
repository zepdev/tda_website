import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import Container from "./Container";
import MobileStepper from "@material-ui/core/MobileStepper";
import ZepiconsChevronRight from "@zlab-de/zel-react-icons/ZepiconsChevronRight";
import ZepiconsChevronLeft from "@zlab-de/zel-react-icons/ZepiconsChevronLeft";
import IconButton from "@zlab-de/zel-react/IconButton";

const useStyles = createUseStyles(theme => ({
  name: {
    color: theme.logo.digitBlue.hex,
    marginBottom: `${theme.spacing.component.s.rem}rem`,
    fontSize: 18
  },
  tagline: {
    marginBottom: `${theme.spacing.component.xl.rem}rem`
  },
  bold: {
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: `${theme.spacing.component.s.rem}rem`
  },
  margin: {
    marginBottom: `${theme.spacing.component.s.rem}rem`
  }
}));

function PastCases({ ...props }) {
  const classes = useStyles(props);
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const cases = ["oillab", "sparkplugs", "transver"];

  return (
    <Container background="secondary" title="Use Cases">
      <div>
        <h2 className={clsx(classes.name, "zep-typo--display-6")}>
          {t(`${cases[activeStep]}.type`)}
        </h2>
        <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
          {t(`${cases[activeStep]}.title`)}
        </p>
        <p className={classes.bold}>{t("problem")}</p>
        <p className={clsx(classes.margin, "zep-typo--normal-body1")}>
          {t(`${cases[activeStep]}.problem`)}
        </p>
        <p className={classes.bold}>{t("solution")}</p>
        <p className="zep-typo--normal-body1">
          {t(`${cases[activeStep]}.solution`)}
        </p>
      </div>

      <MobileStepper
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        style={{ background: "transparent" }}
        nextButton={
          <IconButton
            size="small"
            onClick={handleNext}
            disabled={activeStep === 2}
          >
            <ZepiconsChevronRight />
          </IconButton>
        }
        backButton={
          <IconButton
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <ZepiconsChevronLeft />
          </IconButton>
        }
      />
    </Container>
  );
}

export default PastCases;
