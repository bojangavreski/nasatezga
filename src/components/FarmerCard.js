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

const FarmerCard = ({farmer}) => {

    const isMobile = useMediaQuery({maxWidth:DeviceSize.mobile})
    console.log(farmer)
    return (
    <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px"}: {width:"350px"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={farmer.image}/>
      <h3> {farmer.nameAndSurname} </h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>{farmer.description}</span>
    </BackSide>
  </Flippy>
    )
}

export default FarmerCard;