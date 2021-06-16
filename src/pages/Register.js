import React,{useState,useContext} from 'react'
import {Form,Button,} from 'semantic-ui-react';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';
import {useForm} from '../util/hooks';
import {AuthContext} from '../context/auth'

import '../App.css';

export const Register = props => {
    const context = useContext(AuthContext);

    const [errors,setErrors] = useState({})
    const categories = "Zhitarici, Prerabotki, Ovoshje, Zelenchuk, Meshunkasti, Jatkasti plodovi"
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
        <div className="form-container">
            <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ''}>
                <h1>Регистрација</h1>
                <Form.Input
                label="Име"
                placeholder="Име"
                name="name"
                type="text"
                error={errors.name ? true : false}
                value={values.name}
                onChange={onChange}
                />
                 <Form.Input
                label="Презиме"
                placeholder="Презиме"
                name="surname"
                type="text"
                error={errors.surname ? true : false}
                value={values.surname}
                onChange={onChange}
                />
                 <Form.Input
                label="Е-адреса"
                placeholder="Е-адреса"
                name="email"
                type="email"
                error={errors.email ? true : false}
                value={values.email}
                onChange={onChange}
                />
                 <Form.Input
                label="Град"
                placeholder="Град"
                name="location"
                type="text"
                error={errors.location ? true : false}
                value={values.location}
                onChange={onChange}
                />
                 <Form.Input
                label="Телефонски број"
                placeholder="Телефонски број"
                name="telephone"
                type="text"
                error={errors.telephone ? true : false}
                value={values.telephone}
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
                 <Form.Input
                label="Потврди Лозинка"
                placeholder="Потврди Лозинка"
                name="confirmPassword"
                type="password"
                error={errors.confirmPassword ? true : false}
                value={values.confirmPassword}
                onChange={onChange}
                />
                <Button type="submit" primary>
                    Регистриција
                </Button>
            </Form>
            {Object.keys(errors).length>0 && (
            <div className="ui error message">
                <ul className="list">
                    {Object.values(errors).map(value =>(
                        <li keu={value}> {value} </li>
                    ))}
                </ul>
            </div>)}
        </div>
    )
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
export default Register;