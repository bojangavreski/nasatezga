import React, { useEffect, useState } from "react";
import { Router, Route } from 'react-router-dom';
import { Fragment } from "react";
import { Dialog } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { DialogContentText } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { Button } from "semantic-ui-react";
import { TextField } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MediaQuery from 'react-responsive'
import DetailsCardMobile from '../pages/DetailsCardMobile';

export default function DetailsCard(props){
  
      const [open, setOpen] = React.useState(false);

    useEffect(() =>{
        setOpen(props.setDialogOpen);
    },[props]);


    const handleClose = () => {
      setOpen(false);
      props.setDialogClosed();
    };
   
    
  
      
            return (
                <div>

                <MediaQuery minWidth={1224}>
                     <Dialog open={open} onClose={handleClose} onBackdropClick="true" aria-labelledby="form-dialog-title" className="desktop-only">
                <DialogTitle id="form-dialog-title">Повеќе информации</DialogTitle>
 
           <DialogContent>
             <DialogContentText>
             <div>
                 <h2>Слики од производите</h2>
                 <Carousel autoPlay interval="100" transitionTime="100">
                     <div>
                         <img src="https://picsum.photos/700/400?img=1" />
                         <p className="legend">Мед</p>
                     </div>
                     <div>
                         <img src="https://picsum.photos/700/400?img=2" />
                         <p className="legend">Јаболка</p>
                     </div>
                     <div>
                         <img src="https://picsum.photos/700/400?img=3" />
                         <p className="legend">Сливи</p>
                     </div>
                     <div>
                         <img src="https://picsum.photos/700/400?img=1" />
                         <p className="legend">Мед</p>
                     </div>
                     <div>
                         <img src="https://picsum.photos/700/400?img=2" />
                         <p className="legend">Јаболка</p>
                     </div>
                     <div>
                         <img src="https://picsum.photos/700/400?img=3" />
                         <p className="legend">Сливи</p>
                     </div>
                 </Carousel>
             </div>
             <div>
               Произведено од: 
             </div>
             </DialogContentText>   
           </DialogContent>
           <DialogActions>
             <Button onClick={handleClose} color="default">
               Затвори
             </Button>
           </DialogActions>
         </Dialog>
    
    </MediaQuery>
     {/* <MediaQuery maxWidth={500}>
         <Router>
         <Route exact path="/detailscardmobile" component={DetailsCardMobile} />
         </Router>
               
       </MediaQuery> */}
   </div>
               
            );
          
        
        
    
    
  }