import axios from 'axios';


const url = 'https://covid19.mathdro.id/api';

const url2 = 'https://api.covidtracking.com/v1/states'

const oneDayUrl = 'https://api.covidtracking.com/v1/states'


export const fetchData = async (country) => {
    let changeableUrl = url;
  
    if (country) {
      changeableUrl = `${url}/countries/${country}`;
    }
  
    try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
  
      return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
      return error;
    }
  };


  

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
  
      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };



export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };



  /* States API */

  export const fetchStateData = async (state) => {
    let changeableUrl = url;
  
    if (state) {
      changeableUrl = `${url}/countries/${state}`;
    }
  
    try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
  
      return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
      return error;
    }
  };



  export const fetchStates = async () => {
    try {
      const { data } = await axios.get(`${oneDayUrl}/info.json`);

        const someData  = data.map(item =>  {
            const container = {}
            container.name  = item.name;
            container.state = item.state;

            return container;

        })
        return someData;
    } catch (error) {
      return error;
    }
  };



export const fetchStatesDaily = async (state) => {
    let changeableUrl2 = oneDayUrl;
  
    if (state) {
      changeableUrl2 = `${oneDayUrl}/${state}/current.json`;
    }
  
    try {
        const {data}  = await axios.get(changeableUrl2);
        return data;
    } catch (error) {
      return error;
    }
  };


  