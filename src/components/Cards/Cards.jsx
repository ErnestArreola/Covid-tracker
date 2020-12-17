import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({  data:{ positiveIncrease, deathIncrease, lastUpdateEt, state} }) => {
  if (!positiveIncrease) {
    return 'Loading...';
  }

  

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2" className = {styles.title}> Covid-19 Daily Change by State </Typography>
      <Grid container spacing={2} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle = "Confirmed Daily Cases"
          value={positiveIncrease}
          lastUpdate={lastUpdateEt}
          cardSubtitle="Number of active cases from COVID-19."
        />
        {/* <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={5}
          lastUpdate={lastUpdateEt}
          cardSubtitle="Number of recoveries from COVID-19."
        /> */}
        <CardComponent
          className={styles.deaths}
          cardTitle="Daily Change in Deaths"
          value={deathIncrease}
          lastUpdate={lastUpdateEt}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;