import React from "react";
import { createUseStyles } from "react-jss";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import rene from "../assets/team/rene.png";
import rebekka from "../assets/team/rebekka.png";
import christoph from "../assets/team/christoph.png";
import salvador from "../assets/team/salvador.png";
import alyssa from "../assets/team/alyssa.png";
import nils from "../assets/team/nils.png";
import placeholder from "../assets/team/placeholder.png";
import Container from "./Container";

const useStyles = createUseStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flexBasis: "44%",
    marginBottom: `${theme.spacing.component.xl.rem}rem`
  },
  name: {
    color: theme.logo.digitBlue.hex
  },
  img: {
    width: "50%"
  },
  title: {
    padding: 10
  },
  icon: {
    color: theme.logo.digitBlue.hex,
    height: 18
  },
  [`@media (min-width: ${theme.breakpoint.m})`]: {
    container: {
      flexBasis: "22%"
    }
  }
}));

function Team({ ...props }) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  const team = [
    {
      name: "Rene Ahlgrim",
      img: rene,
      title: "Team Lead"
    },
    {
      name: "Rebekka Sak",
      img: rebekka,
      title: "Product Owner"
    },
    {
      name: "Christoph Bierarcher",
      img: christoph,
      title: "Product Owner"
    },
    {
      name: "Salvador Salazar",
      img: salvador,
      title: "Data Scientist"
    },
    {
      name: "Alyssa Butler",
      img: alyssa,
      title: "Data Scientist"
    },
    {
      name: "Nils Struma",
      img: nils,
      title: "Working Student"
    },
    {
      name: "Jorg Kowollik",
      img: placeholder,
      title: "Working Student"
    },
    {
      name: "",
      img: placeholder,
      title: ""
    }
  ];
  return (
    <Container variant="spaceBetween" title={t("header.who")}>
      {team.map((elem, idx) => (
        <div className={classes.container} key={`teamMember${idx}`}>
          <img src={elem.img} alt={elem.name} className={classes.img} />

          <p className={clsx(classes.name, "zep-typo--display-6")}>
            {elem.name}
          </p>
          <p className={classes.title}>{elem.title}</p>
        </div>
      ))}
    </Container>
  );
}

export default Team;
