import React,{useState,useContext} from 'react'
import {Form,Button,} from 'semantic-ui-react';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';
import {useForm} from '../util/hooks';
import {AuthContext} from '../context/auth'
import '../App.css';


export const Login = props => {
    const context = useContext(AuthContext);
    const [errors,setErrors] = useState({})
    const {onChange,onSubmit,values} = useForm(loginUserCallback,{
        email: '',
        password: ''
    });

    const [loginUser,{loading}] = useMutation(LOGIN_USER,{
        update(_,{data:{login: userData }}){
            context.login(userData)
            props.history.push('/store')
        },
        onError(err){
            // setErrors(err.graphQLErrors[0].extensions.exception.errors);
            console.log(err);
        },
        variables:values
    });
    function loginUserCallback(){
        loginUser();
    }
    return (
        <div className="form-container">
            <Form onSubmit={onSubmit} noValidate className={loading ? "се вчитува.." : ''}>
                <h1>Најава</h1>
                <Form.Input
                label="Е-адреса"
                placeholder="Е-адреса"
                name="email"
                type="text"
                error={errors.email ? true : false}
                value={values.email}
                onChange={onChange}
                />
                 <Form.Input
                label="Лозинка"
                placeholder="Лозинка"
                name="password"
                type="password"
                error={errors.password ? true : false}
                value={values.password}
                onChange={onChange}
                />
                <Button type="submit" primary>
                    Најава
                </Button>
            </Form>
            {Object.keys(errors).length>0 && (
            <div className="ui error message">
                <ul className="list">
                    {Object.values(errors).map(value =>(
                        <li key={value}> {value} </li>
                    ))}
                </ul>
            </div>)}
        </div>
    )
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
export default Login;