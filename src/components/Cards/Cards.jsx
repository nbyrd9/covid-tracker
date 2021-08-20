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