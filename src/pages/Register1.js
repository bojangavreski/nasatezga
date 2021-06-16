import React,{useState,useContext} from 'react'
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';
import {useForm} from '../util/hooks';
import {AuthContext} from '../context/auth'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#03941b',

  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const context = useContext(AuthContext);

    const [errors,setErrors] = useState({})
  
    const {onChange,onSubmit,values} = useForm(registerUser,{
        name: '',
        surname: '',
        email: '',
        location:'',
        telephone: '',
        password: '',
        confirmPassword: '' 
    });

    const [addUser,{loading}] = useMutation(REGISTER_USER,{
        update(_,{data:{register: userData}}){
            context.login(userData);
            props.history.push('/');
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables:values
    });
    function registerUser(){
        addUser();
    }
  return (
    <Container component="main" maxWidth="xs" onSubmit={onSubmit}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Регистрација
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Вашето име"
                error={errors.name ? true : false}
                value={values.name}
                onChange={onChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Вашето презиме"
                name="surname"
                error={errors.surname ? true : false}
                value={values.surname}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            variant="outlined"
            required
            fullWidth
            id="city"
            label="Град"
            error={errors.location ? true : false}
            value={values.location}
            onChange={onChange}
            name="location"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                variant="outlined"
                required
                fullWidth
                type='tel'
                id="telephone"
                label="Телефонски број"
                name="telephone"
                error={errors.telephone ? true : false}
                value={values.telephone}
                onChange={onChange}
            />
          </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Е-адреса"
                value={values.email}
                name="email"
                error={errors.email ? true : false}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Лозинка"
                type="password"
                id="password"
                error={errors.password ? true : false}
                value={values.password}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Потврдете ја лозинката"
                type="password"
                id="password"
                error={errors.confirmPassword ? true : false}
                value={values.confirmPassword}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Регистрирај се
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Имате корисничка сметка? Најавете се
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const REGISTER_USER = gql`
mutation register(
    $name:String!
    $surname:String!
    $email:String!
    $location:String!
    $telephone:String!
    $password:String!
    $confirmPassword:String!
){
    register(
        registerInput:{
            name:$name
            surname:$surname
            email: $email
            location:$location
            telephone:$telephone
            password: $password
            confirmPassword: $confirmPassword
        }
    ){
        name surname email token
    }
}
`;