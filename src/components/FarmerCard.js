import React from 'react';
import { DeviceSize } from './NewNavBar/DeviceSize';
import { useMediaQuery } from 'react-responsive';
import { AuthContext } from '../context/auth';
import StoryImage from "./Images/StoryImage.png"
import Image from "material-ui-image";
import { Button } from '@material-ui/core';
import FarmerForm from './FarmerForm';
import { Slide } from '@material-ui/core';
import gql from "graphql-tag";
import Primer from './Images/Primer.jpg'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const FarmerCard = ({farmer}) => {

    const isMobile = useMediaQuery({maxWidth:DeviceSize.mobile})
    console.log(farmer)
 const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let firstGridCard;
  if (!isMobile){ firstGridCard={marginLeft:"3px"}}
let otherGridCards
   if (!isMobile) {
     otherGridCards = {width:"450px", borderRadius:"30px", marginTop:"30px"} 
   }else {otherGridCards = {width:"350px", borderRadius:"30px"}};
    return (
  <>
  <div class="ui card" style={{width:"400px",  marginTop:"70px"}}>
  <Image src={farmer.image} />
  <div class="content">
    <h3> {farmer.nameAndSurname} </h3>
    <div class="meta">
    <i class="users icon"></i>
      <span class="date">Член на Наша Тезга</span>
      <div style={{display:"flex", justifyContent: "flex-end", margin:"10px auto auto auto"}}>
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
        <DialogTitle> <h2 style={{textAlign:"center"}}> Приказната на: {farmer.nameAndSurname}</h2></DialogTitle>
        <DialogContent>
          <Image src={farmer.image}/>
          <DialogContentText id="alert-dialog-slide-description">
          <h3 style={{textAlign:"center", margin:"20px auto auto auto",color:"black", fontSize:"23px",}}>{farmer.description}</h3>
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