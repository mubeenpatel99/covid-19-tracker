import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import covidImage from './images/covid.png';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        //set the state
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <div>
                <header>
                    Developed By &nbsp;<a alt="Developer Website" href="https://mubeenpatel99.github.io/">Mubeen Patel</a>&nbsp;- 2020
                </header>
                <div className = { styles.container } >
                    <img src = { covidImage } className = { styles.image } alt = "covid-19" / >
                    <h3>Select Region</h3>
                    <CountryPicker handleCountryChange = { this.handleCountryChange }/>
                    <Cards data = { data } />
                    <Chart data = { data } country = { country } />
                </div>
            </div>
        )
    }
}

export default App;