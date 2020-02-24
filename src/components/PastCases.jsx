import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Container from './Container';
import Tabs from '@zlab-de/zel-react/Tabs';
import Tab from '@zlab-de/zel-react/Tab';

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
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: `${theme.spacing.component.s.rem}rem`
  },
  margin: {
    marginBottom: `${theme.spacing.component.s.rem}rem`
  },
  tab: {
    '&:hover': { borderBottomColor: theme.logo.digitBlue.hex }
  },
  tabSelected: {
    borderBottomColor: theme.logo.digitBlue.hex
  },
  paper: {
    padding: `${theme.spacing.component.xl.rem * 2}rem`,
    background: theme.color.gray.white.hex
  }
}));

function PastCases({ ...props }) {
  const classes = useStyles(props);
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  function handleChange(newValue) {
    setValue(newValue);
  }

  const cases = ['transver', 'oillab', 'sparkplugs'];

  return (
    <Container background="secondary" title="Use Cases">
      <Tabs value={value} onClick={handleChange}>
        {cases.map((elem, idx) => (
          <Tab
            label={elem}
            ariaLabel={`tab${idx}`}
            key={`tab${idx}`}
            className={clsx(classes.tab, {
              [classes.tabSelected]: value === idx
            })}
          />
        ))}
      </Tabs>
      <div className={classes.paper}>
        <h2 className={clsx(classes.name, 'zep-typo--display-6')}>
          {t(`${cases[value]}.type`)}
        </h2>
        <p className={clsx(classes.tagline, 'zep-typo--bold-h2')}>
          {t(`${cases[value]}.title`)}
        </p>
        <p className={classes.bold}>{t('problem')}</p>
        <p className={clsx(classes.margin, 'zep-typo--normal-body1')}>
          {t(`${cases[value]}.problem`)}
        </p>
        <p className={classes.bold}>{t('solution')}</p>
        <p className="zep-typo--normal-body1">
          {t(`${cases[value]}.solution`)}
        </p>
      </div>
    </Container>
  );
}

export default PastCases;
