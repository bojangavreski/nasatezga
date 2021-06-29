import React,{useContext} from 'react'
import gql from 'graphql-tag';
import { AuthContext } from '../context/auth';
import { useQuery } from '@apollo/react-hooks';
import {Grid, Transition} from 'semantic-ui-react';
import PostCard from "../components/PostCard";
import ProductForm from '../components/ProductForm';
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
      <Grid columns={3} divided> 
        <Grid.Row className="page-title">

        </Grid.Row>
        <Grid.Row>
          {/*user && (
            <Grid.Column>
              <PostForm />
            </Grid.Column>
          )*/}
          {loading ? (
            <h1>Вчитува...</h1>
          ) : (
            <Transition.Group>
              {data.getProductsByUser &&
            data.getProductsByUser.map((product) => (
              <Grid.Column key={product.id} style={{ marginBottom: 20 }}>
                <PostCard product={product} />
              </Grid.Column>
            ))}
            </Transition.Group>
          )}
        </Grid.Row>
      </Grid>
      </>
    )}

    const FETCH_PRODUCTS_BY_USER_QUERY = gql`
      query($username:String!){
        getProductsByUser(username:$username){
            id
            title
            createdAt
            description
            image
        }
    }
    `

export default Profile
