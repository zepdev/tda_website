import React from 'react';
import { createUseStyles } from 'react-jss';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Container from './Container';
import Contact from './Contact';

const useStyles = createUseStyles(theme => ({
  flex: {
    flexBasis: '100%',
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
  stepsContainer: {
    flexBasis: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  stepsItem: {
    flexBasis: '49%',
    marginBottom: `${theme.spacing.component.xl.rem * 2}rem`
  },
  stepsText: {
    paddingRight: 10,
    paddingLeft: 45
  },
  numberContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: `${theme.spacing.component.s.rem}rem`
  },
  number: {
    background: theme.logo.digitBlue.hex,
    color: theme.color.gray.white.hex,
    width: 30,
    height: 30,
    padding: 7,
    textAlign: 'center',
    borderRadius: '50%',
    marginRight: `${theme.spacing.component.m.rem}rem`
  },
  [`@media (min-width: ${theme.breakpoint.m})`]: {
    flex: {
      flexBasis: '45%',
      marginBottom: 0
    },
    stepsContainer: {
      flexBasis: '49%'
    }
  }
}));

function Process({ ...props }) {
  const classes = useStyles(props);
  const { t } = useTranslation();
  const steps = [
    t('process.setup'),
    t('process.prototype'),
    t('process.pilot'),
    t('process.support')
  ];

  return (
    <Container
      variant="spaceBetween"
      title={t('header.how')}
      background="secondary"
    >
      <div className={classes.flex}>
        <p className={clsx(classes.name, 'zep-typo--display-6')}>
          {t('process.name')}
        </p>

        <p className={clsx(classes.tagline, 'zep-typo--bold-h2')}>
          {t('process.tagline')}
        </p>
        <p className={clsx(classes.text, 'zep-typo--normal-body1')}>
          {t('process.text')}
        </p>
      </div>
      <div className={classes.stepsContainer}>
        {steps.map((elem, idx) => (
          <div className={classes.stepsItem} key={`step${idx}`}>
            <div className={classes.numberContainer}>
              <p className={classes.number}>{idx + 1}</p>
              <p className={(clsx(classes.title), 'zep-typo--display-6')}>
                {elem}
              </p>
            </div>
            <p className={clsx(classes.stepsText, 'zep-typo--normal-caption')}>
              {t(`process.step${idx + 1}`)}
            </p>
          </div>
        ))}
      </div>
      <Contact />
    </Container>
  );
}

export default Process;
