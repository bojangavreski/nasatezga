import { gql } from 'apollo-server-core';
import React, { useContext,useEffect,useState } from 'react'
import { AuthContext } from '../context/auth';
import { useQuery } from '@apollo/react-hooks';
import { Card, Grid, Image, Button,Icon, Label} from "semantic-ui-react";
import moment from 'moment';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

 
const SingleProduct = props => {
  const [open,setOpen] = useState(false);

  useEffect(()=>{
    setOpen(props.dialog);
  },[props.dialog])

  const handleClose = () =>{
    setOpen(false);
    props.trigger();
  }

  return (
    <Dialog
    open={open}
    aria-labelledby="max-width-dialog-title"
  >
    <DialogTitle id="max-width-dialog-title">Форма за нарачка</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Форма за нарачка на посакуваниот продукт со дополнителни информации
      </DialogContentText>

    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Затвори
      </Button>
    </DialogActions>
  </Dialog>
  )
}

const FETCH_PRODUCT_QUERY= gql`
        query($pId:ID!){
        getProduct(pId:$pId){
            id
            title
            createdAt
            username
            description
        }
    }
`;
export default SingleProduct;
