import React from "react";
import { Cards, Chart, CountryPicker } from "./Components"
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/covid19.png";

class App extends React.Component {
    state = {
      data: {},
      country: "",
    };

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
      };


      render() {
        const { data, country } = this.state;
        return (
          <div className={styles.container}>
          <img className={styles.image} src={coronaImage} alt="COVID-19" />
          <br />
          <text>
            <b>COVID-19 Cases Worldwide by Country</b>
          </text>
          <br />
          <text>
          <i>(Select a country from below)</i>
        </text>
        <br />
        <br />
        <Cards data={data} country={country} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
