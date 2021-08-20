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