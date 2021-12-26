import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { DeviceSize } from './NewNavBar/DeviceSize';
import { useMediaQuery } from 'react-responsive';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RuralLogo from './Images/rural_zanas.png'
import ZaNasLogo from './Images/z37.jpg'
import { Image } from 'semantic-ui-react';


const useStyles = makeStyles((theme) => ({
  typography: {
    
  },
  typographySmall: {
   
  },
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(`${ZaNasLogo}`),
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
    // [theme.breakpoints.down("sm")]: {
    //   height: 300,
    //   fontSize: "3em",
    //   zIndex:"-1"
    // }
  },
  // blogsContainer: {
  //   paddingTop: theme.spacing(3)
  // },
  // blogTitle: {
  //   fontWeight: 800,
  //   paddingBottom: theme.spacing(3)
  // },
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
    fontSize:"30px",
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
  },
  boxText:{
    fontWeight:"700",
    justifyContent: 'center',
    display:"flex",
    fontSize: "70px"
  },
  paragraphText:{
    fontSize : "20px",
    fontWeight: "500",
    fontFamily: [
      'Merriweather',
      'serif'
    ].join(',')
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
      <Box>
     <Image src={ZaNasLogo}/>
        </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
    

          <Box style= {{display:"flex", marginTop: "50px"}} > 
      <span className= {classes.spanText}>Што e „Наша тезга“ и која е приказната и целта на овој проект?</span>
        <TrackChangesIcon style={{marginLeft:"10px", color:"green"}}/>
          </Box>
          <p className={classes.paragraphText} style={{marginTop:'15px'}}>Наша тезга произлезе како еден од одговорите, најсериозен, на кризата предизвикана од Ковид пандемијата и тоа токму во делот на економското јакнење на жените од руралните средини. Со самата појава на кризата ние бевме на терен и говоривме
           и делувавме за подобрување на пристапот до услуги и права за жителите во руралните средини, а особено на жените.Платформатаја изработија студенти од ФИНКИ со кои што воспоставивме соработка преку ИМЕ проектот (Increasing Market Employability) финансиран од Швајцарската амбасада, а последната поддршка ни дојде токму од Владата на РМ преку повикот за финансиска поддршка на граѓански организации кој што еднаш годишно го спроведува
            Владата и доделува средства од Буџетот на државата за поддршка на работата на граѓанските организации.</p>

           <Box style= {{display:"flex", marginTop: "50px"}} > 
      <span className= {classes.spanText}>Кој е патот преку кој што ќе се афримира “Наша тезга“</span>
        <CheckCircleOutlineIcon style={{marginLeft:"10px", color:"green"}}/>
          </Box>
          <p className={classes.paragraphText} style={{marginTop:'15px'}}>Тоа е патот кој што треба да го минуваме сите заедно и да ги градиме меѓусекторските партнерства кои што значат градење на партнерства помеѓу бизнис секторот, медиумите, општините и останатите институции и локални и национални чинители кои што ќе ја направат препознатлива “Наша тезга“ на секој чекор, а производите од платформата да се најдат на трпезата во секој дом во нашата земја, а зошто не и во регионот!

Едно е сигурно, а тоа е дека жените од руралните средини ќе бидат секогаш тука преку своите вирутелни тезги и со своите приказни ќе ги промовираат и продаваат своите производи, но и ќе ја шират приказната за првиот виртуелниот рурален пазар кој што е создаден токму од нив и токму за нив.
Во раскажувањето на оваа успешна женска рурална приказна придружете ни се и Вие!</p>

<Box style= {{display:"flex", marginTop: "30px"}} > 
      <span className= {classes.spanText}>Која е идејата за формирање на Рурална Коалиција?</span>
        <VisibilityIcon style={{marginLeft:"10px", color:"green"}}/>
          </Box>
          <p className={classes.paragraphText} style={{marginTop:'15px'}}>Кога се формираше Рурална коалиција, во јули 2013 година, сите во тој период бевме понесени од желбата и мотивацијата да се делува во интерес на земјоделците, како и да се подобри воопшто квалитетот на живот во руралните средини, но тоа да се направи на начин кој што ќе биде темелен, ќе биде заоснован на партнерство, соработка и ќе биде станува збор за организација во која што сите ќе имаат слични идеали, слични интереси и еден ист мотив, а тоа е унапредување на животниот стандард на жителите во руралните средини. 
          Но, со самата промоција и во почетокот на делување на организацијата многу голем интерес се покажа од страна на локалните т.н. грас рут здруженија да влезат во коалицијата и заеднички да се направат напори за делување, а уште тогаш на сите ни беше јасно дека заедно и здружени може да постигнеме повеќе, па всушност тоа е и нашето мото: Само здружени можеме повеќе! И во 2016 година беше потпишана и првата од таков вид социјално-економска платформа на земјоделски здруженија, а се со цел да се сврти вниманието и на пошироката јавност дека земјоделство не значи само производство и продажба на храна туку дека е многу многу повеќе од тоа и дека мора да се делува на повеќе полиња паралелно за да може да кажеме еден ден дека ние со нашето делување сме придонеле кон создавање на конкурентни семејни земјоделски стопанства кои што придонесуваат кон одржливоста на руралните средини и тоа преку едукација, директна поддршка, како и влијание врз локалните и национални политики поврзани со секторот земјоделство и рурален развој. Тоа всушност е и нашата мисија кон чие што достигнување започнавме да работиме како неформална коалиција од 17 здруженија потписници на социо-економската платформа, а денес гордо можам да кажам дека веќе сме препознатлива чадор организација на 50 здруженија, со развиено Рурално Женско Лоби како неформално тело во организацијата, Рурална младина која што се занимава со прашањата на младите во руралните средини, како и Советодавно тело кое што пак помага во градењето на ставовите на Коалицијата особено кога станува збор за креирањето на локалните и национални земјоделски политики, но и кон приближувањето кон Заедничката Земјоделска Политика на ЕУ. Членка сме и на Советот за соработка помеѓу Владата и граѓанскиот сектор, претставувајќи го земјоделството и руралниот развој и мислам дека досега навистина доста успешно успеваме да ја реализираме идејата за постоењето 
          на еден ваков вид на неформална коалиција која што е и единствена по начинот на работа и функционирањето во секторот.</p>
          
      </Container>
      
      <div style={{display:"flex", justifyContent: "center", marginTop:"50px"}}>
      {!isMobile? <a href="https://rural.mk" target="blank"><Image src={RuralLogo} Width={800} height={200}/> </a> : 
      <a href="https://rural.mk" target="blank"><Image src={RuralLogo} width={800} height={100}/> </a>}
      </div> 
    </div> 
    <div style={{marginTop:"100px"}}>
    </div>
    </>
  );
}

export default App;