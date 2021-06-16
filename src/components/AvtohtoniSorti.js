import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',

    backgroundImage: `url(${process.env.PUBLIC_URL + 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
    filter: 'brightness(80%)'
  },
  appbar: {
    background: 'none',
    color:'#5AFF3D',
  
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
    
  },
  appbarTitle: {
    flexGrow: '1',
 
  },
  icon: {
    color: '#',
    fontSize: '2rem',
  },
  colorText: {
    color: '#24f000',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: '3.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '5rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
   <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Дознајте повеќе <br/>за автохтоните сорти во <br/>
            <span className={classes.colorText}>Земјоделството</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
