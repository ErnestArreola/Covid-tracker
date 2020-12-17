import React from 'react';

import { Cards, CountryPicker, Chart, StatePicker } from './components';
import { fetchData, fetchStatesDaily } from './api/';
import styles from './App.module.css';

//import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
    states: 'ca',
  }

  async componentDidMount() {
    const data = await fetchStatesDaily(this.state.states);
    this.setState({ data });
    console.log(data.positiveIncrease);
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  handleStatesChange = async (state) => {
   const data = await fetchStatesDaily(state);
   
   this.setState({data, states: state});
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
        <Cards data={data} />
        <StatePicker handleStatesChange={this.handleStatesChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;