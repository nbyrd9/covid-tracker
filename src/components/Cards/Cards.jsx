import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({
    data: { confirmed, recovered, deaths, lastUpdate },
    country,
  }) => {
    if (!confirmed) {
      return "Loading...";
    }
    const active = confirmed["value"] - recovered["value"] - deaths["value"];
    let cardDetails = [
      {
        style: styles.infected,
        text: "Infected",
        value: confirmed.value,
        bottomText: "Number of infect cases of COVID-19",
      },
      {
        style: styles.recovered,
        text: "Recovered",
        value: recovered.value,
        bottomText: "Number of recoveries from COVID-19",
      },
      {
        style: styles.deaths,
        text: "Deaths",
        value: deaths.value,
        bottomText: "Number of deaths caused by COVID-19",
      },
      {
        style: styles.active,
        text: "Active",
        value: active,
        bottomText: "Number of active cases of COVID-19",
    },