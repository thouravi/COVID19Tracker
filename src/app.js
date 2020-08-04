import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./app.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";
import { Typography } from "@material-ui/core";

class App extends React.Component {
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  state = {
    data: {},
    country: "",
  };

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img classname={styles.image} src={coronaImage} alt="Covid 19" />
        <Typography>
          Developed by <a href="https://twitter.com/ImThour">Avi Thour</a> - Original Tutorial by{" "}
          <a href="https://www.youtube.com/watch?v=khJlrj3Y6Ls">Javascript Mastery</a>
        </Typography>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
