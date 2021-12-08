import { gql } from 'apollo-server-core';
import React, { useContext,useEffect,useState } from 'react'
import { AuthContext } from '../context/auth';
import { useMutation } from '@apollo/react-hooks';
import { Card, Grid, Image, Button,Icon, Label} from "semantic-ui-react";
import moment from 'moment';
import {useForm} from '../util/hooks';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  CssBaseline,
  Container,
  Typography
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "8px",
    marginBottom: "40px"
  },
  submit: {
    margin: "8px",
    backgroundColor: "#03941b",
  },
}));


const OrderProductDialog = props => {
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const [recentProducts, setRecentProducts] = useState([]);
  const { onChange, onSubmit, values } = useForm(orderProductCallback, {
    nameAndSurname: "",
    address: "",
    telephone: "",
    description: ""
  });
  const [orderProduct] = useMutation(ORDER_PRODUCT_MUTATION,{
    variables:{
    nameAndSurname:values.nameAndSurname,
    address:values.address,
    telephone:values.telephone,
    description:values.description,
    }
  })
  function orderProductCallback(){
    orderProduct();
  }

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
    <Container component="main" maxWidth="xs" onSubmit={onSubmit}>
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <AddOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Информации за испорака
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nameAndSurname"
            label="Име и презиме"
            defaultValue= {props.details ? props.details.nameAndSurname : ''}
            name="nameAndSurname"
            onChange={onChange}
            autoComplete="nameAndSurname"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="address"
            label="Адреса"
            defaultValue= {props.details ? props.details.address : ''}
            name="address"
            onChange={onChange}
            autoComplete="address"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            id="telephone"
            label="Телефонски број"
            defaultValue= {props.details ? props.details.telephone : ''}
            name="telephone"
            onChange={onChange}
            autoComplete="telephone"
            autoFocus
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            id="description"
            label="Опис"
            defaultValue= {props.details ? props.details.description : ''}
            name="description"
            onChange={onChange}
            autoComplete="description"
            autoFocus
          />
        </form>
      </div>
    </Container>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Затвори
      </Button>
      <Button onClick={onSubmit} color="primary">
        Нарачај
      </Button>
    </DialogActions>
  </Dialog>
  )
}

const ORDER_PRODUCT_MUTATION= gql`
        mutation($nameAndSurname:String!,$telephone:String!,$address:String!,$description:String!){
        sendOrderEmail(nameAndSurname:$nameAndSurname,telephone:$telephone,address:$address,description:$description)
    }
`;
export default OrderProductDialog;
