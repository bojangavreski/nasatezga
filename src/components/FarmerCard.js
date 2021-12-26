import React from 'react';
import { DeviceSize } from './NewNavBar/DeviceSize';
import { useMediaQuery } from 'react-responsive';
import Image from "material-ui-image";
import { Button } from '@material-ui/core';
import gql from "graphql-tag";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/styles';
import { typography } from '@material-ui/system';

const FarmerCard = ({farmer}) => {
  const useStyles = makeStyles((theme) => ({
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif'
      ].join(',')
    },
    typographySmall: {
      fontFamily: [
        'Merriweather',
        'serif'
      ].join(',')
    }
  }))
  const classes = useStyles();

    const isMobile = useMediaQuery({maxWidth:DeviceSize.mobile})
    console.log(farmer)
 const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
  <>
  <div class="ui card" style={{width:"400px",  marginTop:"70px"}}>
  <Image src={farmer.image} />
  <div class="content">
    <h3 className={classes.typography}> {farmer.nameAndSurname} </h3>
    <div class="meta">
    <i class="users icon"></i>
      <span class="date">Член на Наша Тезга</span>
      <div style={{display:"flex", justifyContent: "flex-end", margin:"10px auto auto auto"}}>
      <Button variant="contained" color="primary" href={`/store/${farmer.nameAndSurname}`}>
           <p> Купи </p>
        </Button>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
           <p> Приказна </p>
        </Button>
        </div>
    </div>
  </div>
  </div>
        
        <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle> <h2 className={classes.typography} style={{textAlign:"center", color:"#383838"}}> Приказната на: {farmer.nameAndSurname}</h2></DialogTitle>
        <DialogContent>
          <Image src={farmer.image}/>
          <DialogContentText id="alert-dialog-slide-description">
          <h3 className={classes.typographySmall} style={{textAlign:"center" , margin:"20px auto auto auto",color:"#383838", fontSize:"20px",}}>{farmer.description}</h3>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Затвори</Button>
        </DialogActions>
      </Dialog>

  </>
    )
}

export default FarmerCard;