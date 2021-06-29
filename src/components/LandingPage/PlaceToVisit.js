import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from './NewsCard';
import places from '../LandingPage/static/places'
import useWindowPosition from '../LandingPage/Hook/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
    <NewsCard place={places[2]} checked={checked} />
      <NewsCard place={places[1]} checked={checked} />
      <NewsCard place={places[0]} checked={checked} />
      
    </div>
  );
}
