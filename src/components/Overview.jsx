import React from "react";
import { createUseStyles } from "react-jss";
import { useTranslation } from "react-i18next";
import Chart from "react-apexcharts";
import List from "@zlab-de/zel-react/List";
import ListItem from "@zlab-de/zel-react/ListItem";
import clsx from "clsx";
import Container from "./Container";
import guidelines from "@zlab-de/zel-react/guidelines.json";

const colors = [
  guidelines.logo.digitBlue.hex,
  guidelines.logo.zLabCyan.hex,
  guidelines.color.support.info.hex,
  guidelines.color.corporate.gray.hex,
  guidelines.color.support.infoLighter.hex
];

const useStyles = createUseStyles(theme => ({
  container: {
    alignItems: "center"
  },
  textContainer: {
    flexBasis: "100%",
    marginBottom: `${theme.spacing.component.xl.rem}rem`
  },
  imgContainerXS: {
    flexBasis: "100%"
  },
  imgContainerL: {
    display: "none"
  },
  name: {
    color: theme.logo.digitBlue.hex,
    marginBottom: `${theme.spacing.component.s.rem}rem`,
    fontSize: 18
  },
  tagline: {
    marginBottom: `${theme.spacing.component.xl.rem}rem`
  },
  text: {
    marginBottom: `${theme.spacing.component.m.rem}rem`
  },
  list: {
    display: "flex",
    justifyContent: "space-between"
  },
  xs: {
    display: "none"
  },
  [`@media (min-width: ${theme.breakpoint.l})`]: {
    textContainer: {
      flexBasis: "49%",
      mariginBottom: 0
    },
    imgContainerXS: {
      display: "none"
    },
    imgContainerL: {
      flexBasis: "49%",
      display: "block"
    }
  }
}));

function Overview({ ...props }) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  const labels = [
    "Advanced Analytics",
    "Data Infrastructure",
    "Road Mapping",
    "Kickstarting",
    "Brainstorming"
  ];

  const optionsXS = {
    chart: {
      id: "apexchart-pie"
    },
    labels: labels,
    dataLabels: {
      enabled: true,
      fontColor: "#000",
      formatter: function(val, opts) {
        return labels[opts.seriesIndex];
      },
      dropShadow: {
        enabled: false
      },
      style: {
        colors: ["#000"]
      }
    },
    tooltip: {
      enabled: false
    },
    colors: colors,
    legend: {
      show: false,
      position: "right",
      fontFamily: "Roboto",
      offsetY: 75,
      fontSize: 16,
      markers: {
        radius: 2
      },
      itemMargin: {
        vertical: 5
      }
    }
  };

  const optionsL = {
    chart: {
      id: "apexchart-pie"
    },
    labels: labels,
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    colors: colors,
    legend: {
      show: true,
      position: "right",
      fontFamily: "Roboto",
      offsetY: 75,
      fontSize: 16,
      markers: {
        radius: 2
      },
      itemMargin: {
        vertical: 5
      }
    }
  };

  return (
    <Container variant="spaceBetween" className={classes.container}>
      <div className={classes.imgContainerL}>
        <Chart
          options={optionsL}
          series={[30, 17.5, 17.5, 17.5, 17.5]}
          type="pie"
          width="80%"
          height={250}
        />
      </div>
      <div className={classes.textContainer}>
        <p className={clsx(classes.name, "zep-typo--display-6")}>
          Team Data Analytics
        </p>
        <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
          {t("header.what")}
        </p>
        <p className={clsx(classes.text, "zep-typo--normal-body1")}>
          {t("overview.visionText")}
        </p>
        <List>
          <ListItem>{t("overview.bullet1")}</ListItem>
          <ListItem>{t("overview.bullet2")}</ListItem>
          <ListItem>{t("overview.bullet3")}</ListItem>
        </List>
      </div>
      <div className={classes.imgContainerXS}>
        <Chart
          options={optionsXS}
          series={[30, 17.5, 17.5, 17.5, 17.5]}
          type="pie"
          width="100%"
          height={300}
        />
      </div>
    </Container>
  );
}

export default Overview;
