import React from 'react';
import { DeviceSize } from './NewNavBar/DeviceSize';
import { useMediaQuery } from 'react-responsive';
import StoryImage from "./Images/StoryImage.png"
import Image from "material-ui-image";
import { Button } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { Slide } from '@material-ui/core';
import Primer1 from './Images/Primer.jpg'
import Primer2 from './Images/Primer2.jpg'
import Primer3 from './Images/Primer3.jpg'
import Primer4 from './Images/Primer4.jpg'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const isMobile = useMediaQuery({maxWidth:DeviceSize.mobile})
let gridStyle;

  if (!isMobile){
     gridStyle = {
      display:"grid",
      gridTemplateColumns:"repeat(4, 1fr)", 
      alignItems:"baseline"
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
    if (!isMobile){ firstGridCard={marginLeft:"20px" } } else{firstGridCard={marginLeft:"0px"}}

  return (
    <>
    <div style={{height:"100px"}}>
      
     {!isMobile? <Image src={StoryImage} style={{paddingTop:"700px"}}/> : <Image src={StoryImage}/> }
       
        <h1 style={{textAlign:"center"}}> Приказни на жените кои се дел од Наша Тезга </h1>

<div style={gridStyle}>
<div class="ui card" style={firstGridCard}>
   <Image src={Primer1}/>
  <div class="content">
    <h3> Даниела Попеска </h3>
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

  <div class="ui card">
  <Image src={Primer2}/>
  <div class="content">
    <h3> Валентина Станковиќ </h3>
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



<div class="ui card">
<Image src={Primer3}/>
  <div class="content">
    <h3> Елена Кипријановска </h3>
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

  <div class="ui card">
   <Image src={Primer4}/>
  <div class="content">
    <h3> Емилија Филиповиќ </h3>
    <div class="meta">
    <i class="users icon"></i>
      <span class="date">Член на Наша Тезга</span>
      <div style={{display:"flex", justifyContent: "flex-end", margin:"10px auto auto auto"}} onClick={handleClickOpen}>
      <Button variant="contained" color="primary">
           <p> Приказна </p>
        </Button>
        </div>
    </div>
  </div>
  </div>

  </div>
</div>

<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle> <h2 style={{textAlign:"center"}}> Приказната на Даниела Попеска</h2></DialogTitle>
        <DialogContent>
          <Image src={Primer1} style={{width:"50%", padding:"150px", display:"flex", justifyContent:"center", margin:"auto"}}/>
          <DialogContentText id="alert-dialog-slide-description">
          <h3 style={{textAlign:"center", margin:"20px auto auto auto"}}>Покрај земјоделство и производство на домашна храна, клучно последниве години е производство на мед.
           Имаме 35 кошници во недопрена природа на границата помеѓу Македонија и Србија во село Пелинце-вели Даниела </h3>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Затвори</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
