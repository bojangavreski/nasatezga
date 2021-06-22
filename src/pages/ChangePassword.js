import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {useMutation} from '@apollo/react-hooks';
import {useForm} from '../util/hooks';
import gql from 'graphql-tag';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import jwtDecode from 'jwt-decode';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Тезга.мк 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#03941b',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#03941b',
 
  },
}));


export default function ChangePassword(props){
  const token = props.match.params.token;
  const decodedJWT = jwtDecode(token);
  const classes = useStyles();
    const [errors,setErrors] = useState({})
    const {onChange,onSubmit,values} = useForm(changePasswordCallback,{
        password: '',
        confirmPassword: '',
        email:''
    });

    const [changePassword,{loading}] = useMutation(CHANGE_PASSWORD,{
        onError(err){
            setErrors("Грешка при промена на лозинка");
        },
        variables:values
    });
    function changePasswordCallback(){
        values.email = decodedJWT.email;
        console.log(values)
        changePassword();
    }
  return (
    <Container component="main" maxWidth="xs" onSubmit={onSubmit}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Променете лозинка
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Лозинка"
            name="password"
            type="password"
            onChange={onChange}
            autoComplete="password"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Потврдете лозинка"
            type="password"
            id="confirmPassword"
            onChange={onChange}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Променете лозинка
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const CHANGE_PASSWORD = gql`
mutation changePassword(
    $password:String!
    $confirmPassword:String!
    $email:String!
){
    changePassword(
            password: $password
            confirmPassword: $confirmPassword
            email: $email
    )
}
`;