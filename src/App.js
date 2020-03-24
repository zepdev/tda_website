import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { Link, animateScroll as scroll, Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import background from './assets/background.png';
import logo from './assets/fullLogo.png';
import ArrowDown from './components/icons/ArrowDown';
import IconButton from '@zlab-de/zel-react/IconButton';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.color.global.white,
    minHeight: '100%'
  },
  body: {
    flex: 1
  },
  container: {
    position: 'absolute',
    top: '25%',
    left: '30%',
    transform: 'translate(-25%, -30%)'
  },
  top: {
    position: 'relative',
    height: '100vh - 80'
  },
  img: {
    zIndex: -5,
    left: 0,
    top: 0,
    width: '100%',
    objectFit: 'cover',
    height: '100vh',
    marginTop: -80
  },
  iconButton: {
    background: 'transparent',
    '&:hover': {
      background: 'transparent'
    },
    '&:active': {
      background: 'transparent'
    },
    '&:focus': {
      background: 'transparent'
    }
  },
  iconButtonDown: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: `${theme.space.xl.rem * 2}rem`,
    marginBottom: `${theme.space.xl.rem}rem`
  },
  iconButtonUp: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    marginRight: `${theme.space.xl.rem * 2}rem`,
    marginBottom: `${theme.space.xl.rem * 2}rem`
  },
  hidden: {
    display: 'none'
  },
  icon: {
    color: theme.color.global.black,
    width: 42,
    height: 42,
    '&:hover': {
      color: theme.blue.primary
    }
  },
  iconUp: {
    transform: 'rotate(180deg)'
  },
  [`@media (min-width: ${theme.breakpoint.m})`]: {
    container: {
      top: '55%',
      left: '65%',
      transform: 'translate(-55%, -65%)'
    }
  }
}));

const useHideOnScroll = () => {
  const prevScrollY = useRef();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsHidden(isHidden => {
        const scrolledDown = window.scrollY < 300;
        if (scrolledDown && !isHidden) {
          return true;
        } else if (!scrolledDown && isHidden) {
          return false;
        } else {
          prevScrollY.current = window.scrollY;
          return isHidden;
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return isHidden;
};

function App() {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [lang, setLang] = useState('en');
  const isHidden = useHideOnScroll();

  const handleSetLang = () => {
    let language = lang === 'en' ? 'de' : 'en';
    i18n.changeLanguage(language);
    setLang(language);
  };

  return (
    <div className={clsx('theme-blue', classes.root)}>
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
        <Content />
        <IconButton
          className={clsx(classes.iconButton, classes.iconButtonUp, {
            [classes.hidden]: isHidden
          })}
          onClick={() => scroll.scrollToTop({ duration: 1500, smooth: true })}
        >
          <ArrowDown
            alt="arrow down"
            className={clsx(classes.icon, classes.iconUp)}
          />
        </IconButton>
      </div>
      <Footer />
    </div>
  );
}

export default App;
