import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyDataStates } from '../../api';
import {Card} from '@material-ui/core';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths }, states }) => {
  const [dailyData, setDailyData] = useState([]);


  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyDataStates(states? states : 'ca' );
      console.log(initialDailyData.reverse());

      setDailyData(initialDailyData);
    };
    fetchMyAPI();
  }, [states]);

  // const barChart = (
  //   confirmed ? (
  //     <Bar
  //       data={{
  //         labels: ['Infected',  'Deaths'],
  //         datasets: [
  //           {
  //             label: 'People',
  //             backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
  //             data: [confirmed.value,  deaths.value],
  //           },
  //         ],
  //       }}
  //       options={{
  //         legend: { display: false },
  //         title: { display: true, text: `Current state in ${states}` },
  //       }}
  //     />
  //   ) : null
  // );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date) ? new Date(date).toLocaleDateString(): null),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Confirmed Cases',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },  
          ],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      <Card style = {{width: "100%", height: "100%"}}>
      {states ? lineChart : lineChart}
      </Card>
    </div>
  );
};

export default Chart;