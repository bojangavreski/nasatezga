import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { DeviceSize } from '../NewNavBar/DeviceSize';
import { useMediaQuery } from 'react-responsive';
import CivicaLogo from '../Images/civica.png'
import KonektLogo from '../Images/konekt.jpg'
import ImeLogo from '../Images/ime.jpg'
import RuralLogo from '../Images/rural.png'
import DonatorskiLogo from '../Images/donatorski.png'
import GizLogo from '../Images/giz.png'
import LandingImage from "../Images/z31.jpg"
import ToBlog from "../Images/z35.jpg"
import Image from "material-ui-image";
import ToStore from "../Images/z39.jpg"
import ToAbout from "../Images/z40.jpg"

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
   width:"50%"
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  },
  spanText:{
    display:"flex",
    justifyContent:"center",
    color: "#08fc39",
    fontWeight: "700"
  },
  boxText:{
    fontWeight:"700",
    justifyContent: 'center',
    display:"flex"
  },
  paragraphText:{
    fontSize : "30px",
    fontWeight: "600"
  }
}));

function App() {
  const classes = useStyles();
  const isMobile = useMediaQuery({maxWidth:DeviceSize.mobile})
  return (
    <div>
      {!isMobile? <Image src={LandingImage} style={{paddingTop:"700px"}}/> : <Image src={LandingImage}/> }
      <a href="/biodiv"> 
      <div style={{display:"flex",marginTop:"30px"}}>
    {!isMobile?<div style={{width:"500px",margin:"50px 0 0 100px" }}>
    <h1 style={{marginTop:"-10px"}}> Нашите жени </h1>
    <Image src={ToBlog} style={{ boxShadow: "0 20px 50px rgba(59, 43, 91, 0.7)"}}/> 
    </div>
    : 

    //MOBILE :
      <div style={{width: "80%", justifyContent:"center", margin:"auto"}}>
        <h1 style={{marginTop:"-10px", textAlign:"center"}}> Нашите жени </h1>
        <p style={{textAlign:"center"}}>Прочитајте ги приказните на нашите жени, проверете го квалитетот и начинот <br/> 
    на кој тие ги одгледуваат своите производи. </p>
        <Image src={ToBlog}  style={{ boxShadow: "0 20px 50px rgba(59, 43, 91, 0.7)"}}/> 
        </div>
        }
    {!isMobile?<h3 style={{textAlign:"center", margin:"330px 0 0 50px"}}> Прочитајте ги приказните на нашите жени, проверете го квалитетот и начинот <br/> 
    на кој тие ги одгледуваат своите производи, стапете во контакт во секој момент.</h3>: null}
    </div>
    </a>

    <a href="/store">
    <div style={{display:"flex", marginTop:"30px"}}>
    {!isMobile?<div style={{width:"500px",margin:"50px 0 0 100px" }}>
    <h1 style={{marginTop:"10px"}}> Продавница </h1>
    <Image src={ToStore} style={{ boxShadow: "0 20px 50px rgba(59, 43, 91, 0.7)"}}/> 
    </div>:
    // MOBILE :
     <div style={{width: "80%", justifyContent:"center", margin:"auto"}}>
     <h1 style={{marginTop:"40px", textAlign:"center"}}> Продавница </h1>
     <p style={{textAlign:"center"}}>  Посетете ја нашата продавница, купувајте ги најдобрите производи одгледани со љубов. </p>
     <Image src={ToStore} style={{ boxShadow: "0 20px 50px rgba(59, 43, 91, 0.7)"}}/> 
     </div>
    }
    {!isMobile?<h3 style={{textAlign:"center", margin:"330px 0 0 40px"}}> Посетете ја нашата продавница, купувајте ги најдобрите <br/> производи одгледани со љубов. 
    Производите чекаат на вас.<br/>  Со само неколку кликања, најлесно до сега ќе може да купите посакуван поризвод.
    </h3>: null}
    </div>
    </a>

    <a href="/ZaNas">
    <div style={{display:"flex", marginTop:"30px", borderRadius:"170px"}}>
    {!isMobile?<div style={{width:"500px",margin:"50px 0 0 100px" }}>
    <h1 style={{marginTop:"40px"}}> За нас </h1>
    <Image src={ToAbout} style={{ boxShadow: "0 20px 50px rgba(59, 43, 91, 0.7)"}}/> 
    </div>:
      <div style={{width: "80%", justifyContent:"center", margin:"auto"}}>
         <h1 style={{marginTop:"40px", textAlign:"center"}}> За нас </h1>
         <p style={{textAlign:"center"}}> Дознајте повеќе за нашата визија и мисија, кои сме ние, за што се залагаме. </p>
          <Image src={ToAbout} style={{ boxShadow: "0 20px 50px rgba(59, 43, 91, 0.7)"}}/> 
    </div>
     }
    {!isMobile?<h3 style={{textAlign:"center", margin:"350px 0 0 50px"}}> Дознајте повеќе за нашата визија и мисија, кои сме ние, за што се залагаме <br/> 
    и како им помагаме на земјодлеците со користење на нашата платформа.</h3> : null}
    </div>
    </a>

      <Container maxWidth="lg" className={classes.blogsContainer} style={{margin:"100px auto auto auto"}}>
        <Typography variant="h4" className={classes.blogTitle}>
          Нашите поддржувачи
        </Typography>

        <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <a href="https://www.giz.de/en/worldwide/301.html" target= "blank">
              <CardActionArea>
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
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}></Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
              </a>
            </Card>
          </Grid>

        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <a href="https://rural.mk" target= "blank">
              <CardActionArea>
                <CardMedia 
                  className={classes.media}
                  image={RuralLogo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Рурална Коалиција
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   Рурална коалиција се стреми кон подобрување на квалитетот на живот во руралните средини; едукација, организација и заедничко делување на земјоделците.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}></Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
              </a>
            </Card>
          </Grid>


          

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <a href="/#">
              <CardActionArea>
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
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}></Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <a href="https://ime.org.mk" target="blank">
              <CardActionArea>
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
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}></Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <a href= "https://civicamobilitas.mk" target="blank">
              <CardActionArea>
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
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}></Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <a href="http://konekt.org.mk" target="blank">
              <CardActionArea>
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
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}></Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;