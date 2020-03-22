import React from 'react';
import { createUseStyles } from 'react-jss';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import build1 from '../assets/analytics.svg';
import build3 from '../assets/fleetx.svg';
import build2 from '../assets/usecase.svg';
import Container from './Container';
import Hidden from '@material-ui/core/Hidden';

const useStyles = createUseStyles(theme => ({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  reverse: {
    flexDirection: 'column'
  },
  background: {
    background: '#E5F3FF'
  },
  imgContainer: {
    flexBasis: '50%',
    height: 400,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgReverse: {
    width: '100%',
    marginLeft: 30,
    marginRight: 0
  },
  img: {
    width: '100%',
    marginLeft: 0,
    marginRight: 30
  },
  flex: {
    flexBasis: '100%',
    alignSelf: 'center',
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
  hidden: {
    display: 'none'
  },
  [`@media (min-width: ${theme.breakpoint.s})`]: {
    container: {
      paddingLeft: 60,
      paddingRight: 60
    },
    imgContainer: {
      flexBasis: '40%',
      marginBottom: 0
    }
  },
  [`@media (min-width: ${theme.breakpoint.m})`]: {
    container: {
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 90,
      paddingRight: 90,
      flexDirection: 'row'
    },
    imgContainer: {
      flexBasis: '55%'
    },
    flex: {
      flexBasis: '45%',
      marginBottom: 0
    },
    hidden: {
      display: 'block'
    }
  },
  [`@media (min-width: ${theme.breakpoint.l})`]: {
    container: {
      paddingTop: 45,
      paddingBottom: 90,
      paddingLeft: 90,
      paddingRight: 90
    },
    flex: {
      flexBasis: '40%'
    }
  },
  [`@media (min-width: ${theme.breakpoint.xl})`]: {
    container: {
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 90,
      paddingRight: 90
    }
  }
}));

function Overview({ ...props }) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  return (
    <>
      <Container variant="spaceBetween">
        <Hidden smDown>
          <div className={classes.imgContainer}>
            <img src={build1} alt="builders 1" className={classes.img} />
          </div>
        </Hidden>
        <div className={classes.flex}>
          <p className={clsx(classes.name, 'zep-typo--display-6')}>
            Analytics+
          </p>
          <p className={clsx(classes.tagline, 'zep-typo--bold-h2')}>
            {t('analytics.tagline')}
          </p>
          <p className="zep-typo--normal-body1">{t('analytics.overview')}</p>
        </div>
      </Container>
      <Container variant="spaceBetween">
        <div className={classes.flex}>
          <h2 className={clsx(classes.name, 'zep-typo--display-6')}>
            Use Cases
          </h2>
          <p className={clsx(classes.tagline, 'zep-typo--bold-h2')}>
            {t('usecase.tagline')}
          </p>
          <p className="zep-typo--normal-body1">{t('usecase.overview')}</p>
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
          <h2 className={clsx(classes.name, 'zep-typo--display-6')}>FleetX</h2>
          <p className={clsx(classes.tagline, 'zep-typo--bold-h2')}>
            {t('fleetx.tagline')}
          </p>
          <p className="zep-typo--normal-body1">{t('fleetx.overview')}</p>
        </div>
      </Container>
    </>
  );
}

export default Overview;

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
