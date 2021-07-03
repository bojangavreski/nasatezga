import React,{useContext,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {AuthContext} from '../context/auth'
import {useMutation} from '@apollo/react-hooks';
import {useForm} from '../util/hooks';
import gql from 'graphql-tag';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#03941b',
 
  },
}));

export default function SignIn(props){
  const classes = useStyles();
  const context = useContext(AuthContext);
    const [errors,setErrors] = useState({})
    const {onChange,onSubmit,values} = useForm(loginUserCallback,{
        email: '',
        password: ''
    });

    const [loginUser,{loading},error] = useMutation(LOGIN_USER,{
        update(_,{data:{login: userData }}){
            context.login(userData)
            props.history.push('/store')
        },
        onError(err){
            setErrors({
              ...errors,
              email:err.graphQLErrors[0].extensions.errors.email,
              password:err.graphQLErrors[0].extensions.errors.password
            })
        },
        variables:values
    });
    function loginUserCallback(){
        loginUser();
    }
  return (
    <Container component="main" maxWidth="xs" onSubmit={onSubmit}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Најава
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Е-адреса"
            name="email"
            onChange={onChange}
            autoComplete="email"
            error={errors.email ? true : false}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Лозинка"
            type="password"
            id="password"
            onChange={onChange}
            autoComplete="current-password"
            error={errors.password ? true : false}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Најавете се
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgot" variant="body2">
                Заборавена лозинка ?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {" Креирајте корисничка сметка. "}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const LOGIN_USER = gql`
mutation login(
    $email:String!
    $password:String!
){
    login(
            email: $email
            password: $password
    ){
        id email token
    }
}
`;