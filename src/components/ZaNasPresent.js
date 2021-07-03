import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { DeviceSize } from './NewNavBar/DeviceSize';
import { useMediaQuery } from 'react-responsive';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import Footer from '../components/NewLandingPage/Footer'
import RuralLogo from './Images/rural_zanas.png'
import { Image } from 'semantic-ui-react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1789&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
      zIndex:"-1"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
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
    fontSize:"30px"
  },
  boxText:{
    fontWeight:"700",
    justifyContent: 'center',
    display:"flex",
    fontSize: "70px"
  },
  paragraphText:{
    fontSize : "20px",
    fontWeight: "500"
  }
}));

function App() {
  const classes = useStyles();
  const isMobile = useMediaQuery({maxWidth:DeviceSize.mobile})
  return (
    <>
    <div className="App">
      <AppBar className={classes.appBar} position="static">
      </AppBar>
      <Box className={classes.hero}>
        <Box> 
        <span className={classes.boxText}>За Нас</span> 
          </Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
      <Box style= {{display:"flex", marginTop: "30px"}} > 
      <span className= {classes.spanText}>Визија</span>
        <VisibilityIcon style={{marginLeft:"10px", color:"green"}}/>
          </Box>
          <p className={classes.paragraphText} style={{marginTop:'15px'}}>Конкурентни и здружени граѓански организации во локалната заедница – 
          двигатели кон цврста развојна земјоделска политика, унапредени социо-економски услови за квалитетен 
          живот и одржлив рурален развој</p>

          <Box style= {{display:"flex", marginTop: "50px"}} > 
      <span className= {classes.spanText}>Мисија</span>
        <TrackChangesIcon style={{marginLeft:"10px", color:"green"}}/>
          </Box>
          <p className={classes.paragraphText} style={{marginTop:'15px'}}>Унапредување на условите за создавање на одржливи рурални заедници преку
           вклучување и поврзување на сите чинители во секторот земjоделство и рурален развоj,градење на капацитети, придонес кон 
           рамномерен регионален развој и учество во креирање на локалната и националната аграрна политика.</p>

           <Box style= {{display:"flex", marginTop: "50px"}} > 
      <span className= {classes.spanText}>Главна Дејност</span>
        <CheckCircleOutlineIcon style={{marginLeft:"10px", color:"green"}}/>
          </Box>
          <p className={classes.paragraphText} style={{marginTop:'15px'}}>Подобрување на квалитетот на живот во руралните средини; едукација, 
          организација и заедничко делување на земјоделците;влијание на политиките на национално и локално ниво, рамномерен регионален развој, 
          промоција и јакнење на капацитетите на локалните граѓански организации.</p>

          <Box style= {{display:"flex", marginTop: "50px"}} > 
          <LinkOutlinedIcon style={{color:'green'}}/>
      <a href="https://rural.mk" rel="noreferrer" target="_blank" style={{textDecoration:'none', marginLeft:"10px" }}><span className= {classes.spanText}>За Рурална Коалиција</span></a>
        <InfoOutlinedIcon style={{marginLeft:"10px", color:"green"}}/>
          </Box>
          <p className={classes.paragraphText} style={{marginTop:'15px'}}>Руралната коалиција веќе е препознатлив партнер на земјоделските здружениjа, 
          кој што опфаќа повеќе сегменти на делување започнувајќи од grass root активности,
          па се до мониторинг, следење на законска национална и ЕУ регулатива, креирање на документи за јавни политики и влијание.<br/>
          Од работењето на Рурална Коалиција и предлозите на жените од руралните средини како и нивната борба за економска егзистенција и изнаоѓањето на 
          нови пазари за продажба на земјоделските производи се оформи виртуелен рурален е-пазар наречен <span style={{color:"green"}}> Наша Тезга. </span> 
          Почетоците на “Наша тезга“ се поддржани како дел од институционалниот грант на програмата Цивика мобилитас, додека пак нејзиниот понатамошен
          развој е овозможен преку Донаторскиот кружок на Конект. Спојот пак со студентите од ФИНКИ- <a href="https://mk.linkedin.com/in/dimitar-tancheski-537b641b7" target="blank">Димитар Танчески</a> и <a href= "https://www.linkedin.com/in/bojan-gavreski-8a3921158/" target="blank">Бојан Гаврески</a> кои што ни ја изработија платформата и 
          направија да изгледа токму како “Наша тезга“</p>
      </Container>
      
      <div style={{display:"flex", justifyContent: "center", marginTop:"50px"}}>
      {!isMobile? <a href="https://rural.mk" target="blank"><Image src={RuralLogo} Width={800} height={200}/> </a> : 
      <a href="https://rural.mk" target="blank"><Image src={RuralLogo} width={800} height={100}/> </a>}
      </div> 
    </div> 
    <div style={{marginTop:"100px"}}>
    <Footer />
    </div>
    </>
  );
}

export default App;