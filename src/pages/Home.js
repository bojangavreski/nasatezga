import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../components/LandingPage/Header';
import PlaceToVisit from '../components/LandingPage/PlaceToVisit';
import Footer from '../components/LandingPage/Footer'


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',

    backgroundImage: `url(${process.env.PUBLIC_URL + 'https://images.unsplash.com/photo-1491202862203-88033b2f36a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1264&q=80'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '50vh'
  
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
      <Footer />
    </div>
  );
}
