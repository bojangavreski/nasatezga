import React, { useContext } from "react";
import { Card, Icon, Label, Image, Button } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { AuthContext } from "../context/auth";
import {useQuery}  from '@apollo/react-hooks';
import { useMutation } from "@apollo/react-hooks";
import { isObjectType } from "graphql";

function PostCard({
    product: { title,description, image,createdAt, id, username,location,creator},
  }) {
    const { user } = useContext(AuthContext);
    const pId = id;
    const [deleteProduct, {error}] = useMutation(DELETE_PRODUCT_MUTATION,{
      variables:{
        pId
      }
    });

    const uId = creator;
    const { loading, data} = useQuery(GET_USER_QUERY,{
      variables: {
        uId
      }
    }); 
    console.log(data);
    let img = image ? image : "https://react.semantic-ui.com/images/avatar/large/molly.png";
    return (
    <Card>
    <Image src={img}  size="medium"  wrapped ui={false} fluid={false}/>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{moment(createdAt).fromNow(true)}</span>
      </Card.Meta>
      <Card.Description>
       {data && `тел: ${data.getUser.telephone}`}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {data && data.getUser.name}
      </a>
      {user && user.email===username &&
      <Button 
         as="div"
         floated="right"
         size="mini"
         onClick={deleteProduct}
         >
        <Icon name="trash" style={{ margin:0 }}/>
           </Button>}
    </Card.Content>
  </Card>);
 
  }
  
  export default PostCard;
  

 
 const DELETE_PRODUCT_MUTATION = gql`
    mutation deleteProduct($pId:ID!){
      deleteProduct(pId:$pId)
    }
  `
  const GET_USER_QUERY = gql`
  query($uId:ID!){
      getUser(uId:$uId){
      name
      telephone 
  }
    }
`

       {/*(<Card>
        <Image
            floated="right"
            size="mini"
            src={img}
          />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta as={Link} to={`/products/:${id}`}>
            {moment(createdAt).fromNow(true)}
          </Card.Meta>
          <Card.Description> {description} </Card.Description>
        </Card.Content>
        <Card.Content extra>
         <Label as={Link} to={`/profile/:${creator}`}>{username}</Label>
         {user && user.email === username && 
         <Button 
         as="di<Image
         floated="right"
         size="mini"
         src={img}
       />
         >
           <Icon name="trash" style={{ margin:0 }}/>
           </Button>}
        </Card.Content>
      </Card>
         );*/}