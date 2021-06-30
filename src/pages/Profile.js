import React,{useContext} from 'react'
import gql from 'graphql-tag';
import { AuthContext } from '../context/auth';
import { useQuery } from '@apollo/react-hooks';
import {Transition} from 'semantic-ui-react';
import PostCard from "../components/PostCard";
import ProductForm from '../components/ProductForm';
import {Grid,LinearProgress} from '@material-ui/core';
import '../App.css';
const Profile = props => {
    const { user } = useContext(AuthContext);
    const username = user.email;
    /*const userId = props.match.params.uId;
    alert(userId);*/
    const { loading, data } = useQuery(FETCH_PRODUCTS_BY_USER_QUERY,{
        variables:{
            username
        }
    });
    if (!data) {
      return <h1>Вчитува...</h1>
    }

    return (
      <>
      <ProductForm user={user}/>
      <div className="wrapper">
      <Grid className="profile-product-list">
      {!loading && data ? data.getProductsByUser.map(
        product => {
      return <PostCard key={product.id} product={product}/>}) : <LinearProgress className="spinner"/>}
      </Grid>
      </div>
      </>
    )}

    const FETCH_PRODUCTS_BY_USER_QUERY = gql`
      query($username:String!){
        getProductsByUser(username:$username){
          id
          title
          description
          createdAt
          image
          username
          category
          creator
          region
        }
    }
    `

export default Profile
