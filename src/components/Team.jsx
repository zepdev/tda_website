import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import rene from '../assets/team/rene.png';
import rebekka from '../assets/team/rebekka.png';
import christoph from '../assets/team/christoph.png';
import salvador from '../assets/team/salvador.png';
import alyssa from '../assets/team/alyssa.png';
import nils from '../assets/team/nils.png';
import placeholder from '../assets/team/placeholder.png';
import Container from './Container';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flexBasis: '44%',
    marginBottom: `${theme.space.xl.rem}rem`
  },
  name: {
    color: theme.blue.primary
  },
  img: {
    width: '50%'
  },
  title: {
    padding: 10
  },
  icon: {
    color: theme.blue.primary,
    height: 18
  },
  [`@media (min-width: ${theme.breakpoint.m})`]: {
    container: {
      flexBasis: '22%'
    }
  }
}));

function Team({ ...props }) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  const team = [
    {
      name: 'Rene Ahlgrim',
      img: rene,
      title: 'Team Lead'
    },
    {
      name: 'Rebekka Sax',
      img: rebekka,
      title: 'Product Owner'
    },
    {
      name: 'Christoph Biberacher',
      img: christoph,
      title: 'Product Owner'
    },
    {
      name: 'Salvador Salazar',
      img: salvador,
      title: 'Data Scientist'
    },
    {
      name: 'Alyssa Butler',
      img: alyssa,
      title: 'Data Scientist'
    },
    {
      name: 'Nils Sturma',
      img: nils,
      title: 'Working Student'
    },
    {
      name: 'Jorg Kowollik',
      img: placeholder,
      title: 'Working Student'
    },
    {
      name: 'Amir Javed',
      img: placeholder,
      title: 'Data Engineer'
    }
  ];
  return (
    <Container variant="spaceBetween" title={t('header.who')}>
      {team.map((elem, idx) => (
        <div className={classes.container} key={`teamMember${idx}`}>
          <img src={elem.img} alt={elem.name} className={classes.img} />

          <p className={clsx(classes.name, 'zep-typo--display-6')}>
            {elem.name}
          </p>
          <p className={classes.title}>{elem.title}</p>
        </div>
      ))}
    </Container>
  );
}

export default Team;
