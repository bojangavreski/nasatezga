import React from "react";
import { Form, Button, Dropdown} from "semantic-ui-react";
import gql from "graphql-tag";
import { useForm } from "../util/hooks";
import { useMutation } from "@apollo/react-hooks";


function ProductForm(props) {
  const { values, onChange, onSubmit } = useForm(createProductCallback, {
    title: "",
     description:"",
     location:"",
      image:"",
       category:""
  });
  const username = props.user.email;
  const [createProduct, { error }] = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_PRODUCTS_BY_USER_QUERY,
        variables:{
             username
        }
      });
      //data.getPosts = [result.data.createPost, ...data.getPosts];
        //data.getProducts = [result.data.createProduct, ...data.getProducts];

      proxy.writeQuery({ query: FETCH_PRODUCTS_BY_USER_QUERY, data:{
          getProductsByUser: [...data.getProductsByUser,result.data.createProduct]  
      }});
      values.title= "";
      values.description="";
      values.location="";
      values.image="";
      values.category=""
    },
  });
  function createProductCallback() {
   
    createProduct().catch(e => {
 
    })
  
  }
  return (
      <>
    <Form onSubmit={onSubmit}>
      <h2>Креирајте ваш пост</h2>
      <Form.Field>
        <Form.Input
          placeholder="Домат"
          name="title"
          onChange={onChange}
          value={values.title}
          error={error ? true : false}
        />
         <Form.Input
          placeholder="Домат произведен во Кавадарци"
          name="description"
          onChange={onChange}
          value={values.description}
          error={error ? true : false}
        />
         <Form.Input
          placeholder="Кавадарци"
          name="location"
          onChange={onChange}
          value={values.location}
          error={error ? true : false}
        />
          <Form.Input
          placeholder="Слика"
          name="image"
          onChange={onChange}
          value={values.image}
          error={error ? true : false}
        />
         <Form.Input
          placeholder="Овошје"
          name="category"
          onChange={onChange}
          value={values.category}
          error={error ? true : false}
        />
        <Button type="submit" color="teal">
          Креирај
        </Button>
      </Form.Field>
    </Form>
    {error && (
        <div className="ui error message" style={{ marginBottom: 20}}>
            <ul className="list">
                <li>{error.graphQLErrors ? error.graphQLErrors[0].message : "Greshka"}</li>
            </ul>
        </div>
    )}
    </>
  );
}

const CREATE_PRODUCT_MUTATION = gql`
  mutation createProduct($title: String!, $description:String!, $location:String!, $image:String! $category:String! ) {
    createProduct(title: $title,description:$description,location:$location,image:$image,category:$category ) {
      title
      description
      createdAt
      category
    }
  }
`;

const FETCH_PRODUCTS_BY_USER_QUERY = gql`
      query($username:String!){
        getProductsByUser(username:$username){
            id
            title
        }
    }
    `
export default ProductForm;
