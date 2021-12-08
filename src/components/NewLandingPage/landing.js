import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { DeviceSize } from '../NewNavBar/DeviceSize';
import { useMediaQuery } from 'react-responsive';
import CivicaLogo from '../Images/civica.png'
import KonektLogo from '../Images/konekt.jpg'
import ImeLogo from '../Images/ime.jpg'
import RuralLogo from '../Images/grb.png'
import DonatorskiLogo from '../Images/donatorski.png'
import GizLogo from '../Images/giz.png'
import LandingImage from "../Images/z31.jpg"
import ToBlog from "../Images/z35.jpg"
import Image from "material-ui-image";
import ToStore from "../Images/z39.jpg"
import ToAbout from "../Images/z40.jpg"

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(',')
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 200
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },

}));

function App() {
  const classes = useStyles();
  const isMobile = useMediaQuery({maxWidth:DeviceSize.mobile})

  return (
    <>

    {!isMobile? <Image src={LandingImage} style={{paddingTop:"1000px"}} /> : <Image src={LandingImage}/> }
    <div>

      <a href="/biodiv"> 
      <div style={{display:"flex",marginTop:"30px"}}>
    {!isMobile?<div style={{width:"500px",margin:"50px 0 0 100px" }}>
    <h1 className={classes.typography} style={{marginTop:"-10px"}}> Нашите жени </h1>
    <Image src={ToBlog}/> 
    </div>
    : 

    //MOBILE :
      <div style={{width: "80%", justifyContent:"center", margin:"auto"}}>
        <h1 className={classes.typography} style={{marginTop:"-10px", textAlign:"center"}}> Нашите жени </h1>
        <p className={classes.typography}  style={{textAlign:"center"}}>Прочитајте ги приказните на нашите жени, проверете го квалитетот и начинот <br/> 
    на кој тие ги одгледуваат своите производи. </p>
        <Image src={ToBlog}/> 
        </div>
        }
    {!isMobile?<h3 className={classes.typography} style={{textAlign:"center", margin:"330px 0 0 50px"}}> Прочитајте ги приказните на нашите жени, проверете го квалитетот и начинот <br/> 
    на кој тие ги одгледуваат своите производи, стапете во контакт во секој момент.</h3>: null}
    </div>
    </a>

    <a href="/store">
    <div style={{display:"flex", marginTop:"30px"}}>
    {!isMobile?<div style={{width:"500px",margin:"50px 0 0 100px" }}>
    <h1 className={classes.typography} style={{marginTop:"10px"}}> Продавница </h1>
    <Image src={ToStore}/> 
    </div>:
    // MOBILE :
     <div style={{width: "80%", justifyContent:"center", margin:"auto"}}>
     <h1 className={classes.typography} style={{marginTop:"40px", textAlign:"center"}}> Продавница </h1>
     <p className={classes.typography} style={{textAlign:"center"}}>  Посетете ја нашата продавница, купувајте ги најдобрите производи одгледани со љубов. </p>
     <Image src={ToStore}/> 
     </div>
    }
    {!isMobile?<h3 className={classes.typography} style={{textAlign:"center", margin:"330px 0 0 40px"}}> Посетете ја нашата продавница, купувајте ги најдобрите <br/> производи одгледани со љубов. 
    Производите чекаат на вас.<br/>  Со само неколку кликања, најлесно до сега ќе може да купите посакуван поризвод.
    </h3>: null}
    </div>
    </a>

    <a href="/ZaNas">
    <div style={{display:"flex", marginTop:"30px", borderRadius:"170px"}}>
    {!isMobile?<div style={{width:"500px",margin:"50px 0 0 100px" }}>
    <h1 className={classes.typography} style={{marginTop:"40px"}}> За нас </h1>
    <Image src={ToAbout}/> 
    </div>:
      <div style={{width: "80%", justifyContent:"center", margin:"auto"}}>
         <h1 className={classes.typography} style={{marginTop:"40px", textAlign:"center"}}> За нас </h1>
         <p className={classes.typography} style={{textAlign:"center"}}> Дознајте повеќе за нашата визија и мисија, кои сме ние, за што се залагаме. </p>
          <Image src={ToAbout}/> 
    </div>
     }
    {!isMobile?<h3 className={classes.typography} style={{textAlign:"center", margin:"350px 0 0 50px"}}> Дознајте повеќе за нашата визија и мисија, кои сме ние, за што се залагаме <br/> 
    и како им помагаме на земјодлеците со користење на нашата платформа.</h3> : null}
    </div>
    </a>

     <div style={{maxWidth:"1000px"}}>
      <Container style={{margin:"100px auto auto auto"}}>
        <Typography variant="h4" >
          Нашите поддржувачи
        </Typography>

        <div style={!isMobile?{display:"flex", flexDirection:"row", margin:"auto"}: {display:"grid", gridTemplateColumns:"repeat(1,1fr)", justifyItems:"center", margin:"auto"}}>  
 
           
              <a href="https://www.giz.de/en/worldwide/301.html" target= "blank">
              <CardActionArea style={{width:"250px"}}>
                <CardMedia
                  className={classes.media}
                  image={GizLogo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    GIZ Macedonia
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  ГиЗ испорачува ефективни решенија што им нудат на луѓето подобри перспективи и ги подобрува нивните услови за живот на одржлив начин.
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            
              <a href="https://vlada.mk" target= "blank">
              <CardActionArea style={{width:"250px"}}>
                <CardMedia 
                  className={classes.media}
                  image={RuralLogo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   Влада на Република Македонија
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   Помогнати од владата на Република Македонија
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>

              <a href="/#">
              <CardActionArea style={{width:"300px"}}>
                <CardMedia
                  className={classes.media}
                  image={DonatorskiLogo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Донаторски Кружок
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Донаторскиот кружок на Конект е друштво што донира заеднички и паметно и ги овозможи првите средства за наша тезга.
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>

              <a href="https://ime.org.mk" target="blank">
              <CardActionArea style={{width:"300px"}}  >
                <CardMedia
                  className={classes.media}
                  image={ImeLogo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    IME - Increasing Market Employability
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  ИМЕ во соработка со актерите на пазарот се стреми да го подобри квалитетот и испораката на услугите за деловна поддршка, пристап до финансии и инвестиции.
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
        
              <a href= "https://civicamobilitas.mk" target="blank">
              <CardActionArea style={{width:"250px"}}>
                <CardMedia
                  className={classes.media}
                  image={CivicaLogo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Civica Mobilitias
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Цивика мобилитас е програма за поддршка на граѓанското општество чија трета фаза започна да се спроведува од 1 јануари 2019 година и 
                  ќе трае до 31 декември 2022 година.
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
   

              <a href="http://konekt.org.mk" target="blank">
              <CardActionArea style={{width:"300px"}}>
                <CardMedia
                  className={classes.media}
                  image={KonektLogo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    KONEKT
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Конект е здружение на граѓани формирано од неколку ентузијасти кои веруваат дека Македонија 
                  има потенцијал да се развива потпирајќи се на локални ресурси и капацитети.
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            
       
          </div>
      </Container>
    </div>
    </div>
    </>
  );
}

export default App;