import React,{useContext} from 'react';
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
import Primer2 from './Images/Primer2.jpg'
import Primer3 from './Images/Primer3.jpg'
import Primer4 from './Images/Primer4.jpg'
import Primer5 from './Images/Primer5.jpg'
import Primer6 from './Images/Primer6.jpg'
import Primer7 from './Images/Primer7.jpg'
import Primer8 from './Images/Primer8.jpg'
import Primer9 from './Images/Primer9.jpg'
import Primer10 from './Images/Primer10.jpg'
import Primer11 from './Images/Primer11.jpg'
import Primer12 from './Images/Primer12.jpg'
import {useMutation,useQuery} from '@apollo/react-hooks'

import Flippy, { FrontSide, BackSide } from 'react-flippy';
import FarmerCard from './FarmerCard';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function App() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState("");

  React.useEffect(() => {
    user ? setUserEmail(user.email) : setUserEmail("")
  })

  const {loading, data} = useQuery(FETCH_FARMERS_QUERY);
  const isMobile = useMediaQuery({maxWidth:DeviceSize.mobile})
let gridStyle;

  if (!isMobile){
     gridStyle = {
      display:"grid",
      gridTemplateColumns:"repeat(4, 1fr)",
      justifyItems:"center", 
     }
  }
  else {
    gridStyle = {
      display:"grid", 
      gridTemplateColumns:"repeat(1, 1fr)", 
      justifyItems:"center",
      margin:"auto"
  }
}
   
    let firstGridCard;
    if (!isMobile){ firstGridCard={marginLeft:"3px"}}
  let otherGridCards
     if (!isMobile) {
       otherGridCards = {width:"450px", borderRadius:"30px"} 
     }else {otherGridCards = {width:"350px", borderRadius:"30px"}};


 
  return (
    <>
    <div style={{height:"100px"}}>
      
     {!isMobile? <Image src={StoryImage} style={{paddingTop:"700px"}}/> : <Image src={StoryImage}/> }
       
        <h1 style={{textAlign:"center"}}> Приказни на жените кои се дел од Наша Тезга </h1>

<div style={gridStyle}>
  
  {userEmail==="admin@dev.com" ? <FarmerForm/> : <> </>}
  <div style={firstGridCard}>
   <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px"}: {width:"350px"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer} />
      <h3> Даниела Мишевска </h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>

  </div>
    {
      //UNCOMMENT THE FETCH_FARMERS_QUERY
     data ? data.getAllFarmers.map(item =>{
        return <FarmerCard farmer={item}/>
      }) : <> </>  
    }
    <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer2} />
      <h3> Дивна Цветковска</h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>


  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer3} />
      <h3> Добрила Даиловска</h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>

  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer4} />
      <h3> Живка Ѓурчиновска</h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>

<div style={firstGridCard}>
  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer5} />
      <h3> Лидија Јаневска </h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>
  </div>

  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer6} />
      <h3> Славица Јаневска </h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>

  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer7} />
      <h3> Цутика Лазаревска </h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>


  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}}  
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer8} />
      <h3> Орнела Переска</h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
    </BackSide>
  </Flippy>


  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer9} />
      <h3> Ленче Чакревска </h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      
    </BackSide>
  </Flippy>

  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer10} />
      <h3> Емилија Пехчевска </h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      
    </BackSide>
  </Flippy>


  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer12} />
      <h3> Билјана Витанова</h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
    </BackSide>
  </Flippy>
</div>
</div>
    </>
  );
}

const FETCH_FARMERS_QUERY = gql`
  {
    getAllFarmers{
      nameAndSurname
      image
      description
    }
  }
`; 

export default App;



/*
 <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer2} />
      <h3> Дивна Цветковска</h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>


  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer3} />
      <h3> Добрила Даиловска</h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>

  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer4} />
      <h3> Живка Ѓурчиновска</h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>

<div style={firstGridCard}>
  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer5} />
      <h3> Лидија Јаневска </h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>
  </div>

  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer6} />
      <h3> Славица Јаневска </h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>

  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer7} />
      <h3> Цутика Лазаревска </h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      <span style={{textAlign:"center", color:"black", fontSize:"23px", top:"50%", left:"50%"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце</span>
    </BackSide>
  </Flippy>


  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}}  
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer8} />
      <h3> Орнела Переска</h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
    </BackSide>
  </Flippy>


  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer9} />
      <h3> Ленче Чакревска </h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      
    </BackSide>
  </Flippy>

  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer10} />
      <h3> Емилија Пехчевска </h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
      
    </BackSide>
  </Flippy>


  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    animationDuration = {1000}
    flipDirection="horizontal"
    
    style={!isMobile?{ width:"400px", height:"500px",margin:"20px auto auto auto"}: {width:"350px",margin:"20px auto auto auto"}} 
  >
<FrontSide style={{backgroundColor:"#DF9869"}}>
  
       <Image src={Primer12} />
      <h3> Билјана Витанова</h3>
      <Button variant="contained" style={{backgroundColor:"darkgreen"}}>Приказна</Button>
     
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#DF9869'}}>
    </BackSide>
  </Flippy>
*/