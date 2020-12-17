import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchStates } from '../../api';

import styles from './StatePicker.module.css';

const States = ({ handleStatesChange }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setStates(await fetchStates());
      console.log(states);
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue = "" onChange={(e) => handleStatesChange(e.target.value)}>
  <option value = ""> California </option>
        {states.map((country, i) => <option key={i} value={country.state}>{country.name}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default States;