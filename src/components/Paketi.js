import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { DeviceSize } from './NewNavBar/DeviceSize';
import { useMediaQuery } from 'react-responsive';
import { Image } from 'semantic-ui-react';
import {  Button} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    typography: {
      
    },
    typographySmall: {
     
    },
    appBar: {
      backgroundColor: "#fff"
    },
    hero: {
      // backgroundImage: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(`${ZaNasLogo}),
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      width: "800px"
      // [theme.breakpoints.down("sm")]: {
      //   height: 300,
      //   fontSize: "3em",
      //   zIndex:"-1"
      // }
    }
}))

const Paketi = (props) => {
    const classes = useStyles();
    const isMobile = useMediaQuery({maxWidth:DeviceSize.mobile})
    console.log ('ove se tie', props)

    return (
        <div>
           <div>
            <h1 style={{textAlign:"center", margin:"30px auto 50px auto", fontFamily:"Montserrat"}}> Промотивни пакети од Наша Тезга </h1>
        </div>
           
      {!isMobile?<Box className={classes.hero} style={{width:"100%", display:"flex", justifyContent:"center"}} >
     <img src={"https://i.imgur.com/lGtUGlo.jpg"} width={"70%"} height={"90%"} alt=""/>
        </Box>: 
        <Box className={classes.hero} style={{width:"100%", display:"flex", justifyContent:"center"}} >
        <img src={"https://i.imgur.com/lGtUGlo.jpg"} alt=""/>
           </Box> 
        }
      
      <a href="#"> 
      <div style={{display:"flex",marginTop:"30px"}}>
    {!isMobile?<div style={{width:"500px",margin:"50px 0 0 100px" }}>
    <h1 className={classes.typography} style={{marginTop:"-10px", fontFamily:"Montserrat"}}> Промотивен пакет: 699ден.</h1>
     <Image src={"https://i.imgur.com/TUODO91.jpg"}/> 
     <Button
                    className="button-mui"
                    variant="contained"
                    style={{ paddingBottom: "0px", marginTop:"5px" }}
                    color="primary"
                    
                  >
                    <p> Нарачај </p>
                  </Button>  
    </div>
    : 

    //MOBILE :
      <div style={{width: "80%", justifyContent:"center", margin:"auto"}}>
        <h1 className={classes.typography} style={{marginTop:"-10px", textAlign:"center", fontFamily:"Montserrat"}}> Промотивен пакет: 699ден. </h1>
        <p className={classes.typography}  style={{textAlign:"center", fontFamily:"Montserrat"}}> Состав на пакетот:- ајвар;
            - руска салата;
            - лешници 100 гр.;
            - грав 200 гр.;
            - слатко од сливи, џем, компот  (во зависност од тоа што во моментот имаме на залиха)
            - 5 пиперки низарки </p>
         <Image src={"https://i.imgur.com/TUODO91.jpg"}/>  
         <Button
                    className="button-mui"
                    variant="contained"
                    style={{ paddingBottom: "0px", marginTop:"5px" }}
                    color="primary"
                    
                  >
                    <p> Нарачај </p>
                  </Button>  
        </div>
        }
    {!isMobile?<h3 className={classes.typography} style={{textAlign:"center", margin:"180px 0 0 110px", fontFamily:"Montserrat"}}> Состав на пакетот: <br/> 
 - ајвар;
 <br/>
- руска салата;
<br/>
- лешници 100 гр.;
<br/>
- грав 200 гр.;
<br/>
- слатко од сливи, џем, компот (во зависност од тоа што во моментот имаме на залиха)
<br/>
- 5 пиперки низарки</h3>: ''}
    </div>
    </a>




    <a href="#"> 
      <div style={{display:"flex",marginTop:"30px"}}>
    {!isMobile?<div style={{width:"550px",margin:"50px 0 0 100px", height:"600px" }}>
    <h1 className={classes.typography} style={{marginTop:"-10px", fontFamily:"Montserrat"}}> Новогодишен промотивен пакет: 799ден.</h1>
     <Image src={"https://i.imgur.com/lGtUGlo.jpg"}/>
     <Button
                    className="button-mui"
                    variant="contained"
                    style={{ paddingBottom: "0px", marginTop:"5px" }}
                    color="primary"
                    
                  >
                    <p> Нарачај </p>
                  </Button>  
    </div>
    : 

    //MOBILE :
      <div style={{width: "80%", justifyContent:"center", margin:"auto"}}>
        <h1 className={classes.typography} style={{marginTop:"10px", textAlign:"center", fontFamily:"Montserrat"}}> Новогодишен промотивен пакет: 799ден. </h1>
        <p className={classes.typography}  style={{textAlign:"center", fontFamily:"Montserrat"}}> Состав на пакетот:- ајвар;
            - руска салата;
            - лешници 100 гр.;
            - грав 200 гр.;
            - слатко од сливи, џем, компот (во зависност од тоа што во моментот имаме на залиха)
            - 5 пиперки низарки </p>
         <img src={"https://i.imgur.com/lGtUGlo.jpg"}/> 
         <Button
                    className="button-mui"
                    variant="contained"
                    style={{ paddingBottom: "0px", marginTop:"5px" }}
                    color="primary"
                    
                  >
                    <p> Нарачај </p>
                  </Button>  
        </div>
        }
    {!isMobile?<h3 className={classes.typography} style={{textAlign:"center", margin:"170px 0 0 50px", fontFamily:"Montserrat"}}> Овие новогодишни и божиќни пакетчиња содржат:
    <br/>
- чипс од лешници (100 гр.), сушени јапонски јаболка (100 гр.) и чипс од јаболка со цимет (100 гр.)
<br/>
- сок од јаболко (200 мл),  едно ресенско јаболко; 
<br/>
честитка изработена од списанието ЛицевЛице со која
<br/>
 што директно ги помагате социјално загрозените и ранливи категории на граѓани;
 <br/>
- новогодишен украс изработен од жените од руралните средини;
<br/>
- новогодишна торба исто така изработена до вредните раце на
<br/>
 жените од руралните средини.</h3>: ''}
    </div>
    </a>
    <div style={{marginTop:"100px"}}> :</div>
        </div>
    )
}

export default Paketi