import React from "react";
import { Cards, Chart, CountryPicker } from “./Components”;
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

class App extends React.Component {
    state = {
      data: {},
      country: "",
    };

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }
