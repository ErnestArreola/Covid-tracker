import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue = "" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value = ""> United States </option>
        {countries.map((st, i) => <option key={i} value={st}>{st}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;