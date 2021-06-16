import { gql } from 'apollo-server-core';
import React, { useContext } from 'react'
import { AuthContext } from '../context/auth';
import { useQuery } from '@apollo/react-hooks';
import { Card, Grid, Image, Button,Icon, Label} from "semantic-ui-react";
import moment from 'moment';


 
const SingleProduct = props => {
    const productId = props.match.params.pId;
    const {user} = useContext(AuthContext);
    let pId = productId.substring(1);
    const {data,loading} = useQuery(FETCH_PRODUCT_QUERY,{
        variables:{
            pId
        }
    })
    console.log(pId);
    if(loading){
        console.log(data);
        return <h1>Loading</h1>
    }
    if(!data) return <h1>Erro</h1>
    console.log(data.getProduct)
    const {id,title,description,createdAt,username,location} = data.getProduct;
      let postMarkup = (
        <Grid>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                size="small"
                float="right"
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <Card fluid>
                <Card.Content>
                  <Card.Header>{title}</Card.Header>
                  <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
                  <Card.Description>{description}</Card.Description>
                </Card.Content>
                <hr />
                <Card.Content extra>
                    <Label>{username}</Label>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
  return postMarkup;
};

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
