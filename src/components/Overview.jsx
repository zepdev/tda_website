import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import List from '@zlab-de/zel-react/List';
import ListItem from '@zlab-de/zel-react/ListItem';
import clsx from 'clsx';
import Container from './Container';
import venn from '../assets/venn.png';

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: 'center'
  },
  textContainer: {
    flexBasis: '100%',
    marginBottom: `${theme.space.xl.rem}rem`
  },
  imgContainerXS: {
    flexBasis: '100%',
    textAlign: 'center'
  },
  imgContainer: {
    display: 'none'
  },
  name: {
    color: theme.blue.primary,
    marginBottom: `${theme.space.s.rem}rem`,
    fontSize: 18
  },
  tagline: {
    marginBottom: `${theme.space.xl.rem}rem`
  },
  text: {
    marginBottom: `${theme.space.m.rem}rem`
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  xs: {
    display: 'none'
  },
  img: {
    width: '60%'
  },
  [`@media (min-width: ${theme.breakpoint.m})`]: {
    img: {
      width: '90%'
    },
    container: {
      flexWrap: 'nowrap'
    },
    textContainer: {
      flexBasis: '49%',
      mariginBottom: 0
    },
    imgContainerXS: {
      display: 'none'
    },
    imgContainer: {
      flexBasis: '49%',
      textAlign: 'center',
      display: 'block'
    }
  },
  [`@media (min-width: ${theme.breakpoint.l})`]: {
    img: {
      width: '80%'
    }
  },
  [`@media (min-width: ${theme.breakpoint.xl})`]: {
    img: {
      width: '50%'
    }
  }
}));

function Overview({ ...props }) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  return (
    <Container variant="spaceBetween" className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={venn} alt="venn digram" className={classes.img} />
      </div>
      <div className={classes.textContainer}>
        <p className={clsx(classes.name, 'zep-typo--display-6')}>
          Team Data Analytics
        </p>
        <p className={clsx(classes.tagline, 'zep-typo--bold-h2')}>
          {t('header.what')}
        </p>
        <p className={clsx(classes.text, 'zep-typo--normal-body1')}>
          {t('overview.visionText')}
        </p>
        <List>
          <ListItem>{t('overview.bullet1')}</ListItem>
          <ListItem>{t('overview.bullet2')}</ListItem>
          <ListItem>{t('overview.bullet3')}</ListItem>
        </List>
      </div>
      <div className={classes.imgContainerXS}>
        <img src={venn} alt="venn digram" className={classes.img} />
      </div>
    </Container>
  );
}

export default Overview;
