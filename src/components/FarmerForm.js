import React, { useEffect, useState } from "react";
import AddImage from "./AddImage";
import { Form } from "semantic-ui-react";
import gql from "graphql-tag";
import { useForm } from "../util/hooks";
import { useMutation, useQuery } from "@apollo/react-hooks";
import "../App.css";
import {makeStyles} from "@material-ui/styles"
import {
  Container,
  Typography,
  TextField,
  CssBaseline,
  Button
} from "@material-ui/core";

function FarmerForm(props) {
    const useStyles = makeStyles((theme) => ({
        paper: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        avatar: {
          backgroundColor: "#03941b",
        },
        form: {
          width: "100%", // Fix IE 11 issue.
        },
        submit: {
          backgroundColor: "#03941b",
        },
      }));
   
  const classes = useStyles();

  const { values, onChange, onSubmit } = useForm(createFarmerCallback, {
    nameAndSurname: "",
    image: "",
    description: ""
  });
  
  
  const [createFarmer] = useMutation(CREATE_FARMER_MUTATION,{
    variables:values
})

  function createFarmerCallback() {
    createFarmer().catch((e) => {});
  }
   
  const setImage = (img) => {
    console.log()
    values.image = img;
  };
  return (
    <Container component="main" maxWidth="xs" onSubmit={onSubmit}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Додадете продукт
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nameAndSurname"
            label="Наслов"
            name="nameAndSurname"
            onChange={onChange}
            value={values.nameAndSurname}
            autoComplete="title"
            autoFocus
          />
          <AddImage props={setImage} />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="description"
            label="Опис"
            name="description"
            onChange={onChange}
            value={values.description}
            autoComplete="title"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Постави
          </Button>
        </form>
      </div>
    </Container>
  );
}

const CREATE_FARMER_MUTATION = gql`
    mutation createFarmer(
        $nameAndSurname:String!
        $image:String!
        $description:String!
    ){
        enterFarmer(
        nameAndSurname:$nameAndSurname
        image:$image
        description:$description
        ){
           nameAndSurname
           image
           description
        }
    }
`
const CREATE_PRODUCT_MUTATION = gql`
  mutation createProduct(
    $title: String!
    $description: String!
    $location: String!
    $image: String!
    $category: String!
    $region: String!
    $creator: String!
  ) {
    createProduct(
      title: $title
      description: $description
      location: $location
      image: $image
      category: $category
      region: $region
      creator: $creator
    ) {
      title
      description
      createdAt
      category
    }
  }
`;

const FETCH_PRODUCTS_BY_USER_QUERY = gql`
  query ($username: String!) {
    getProductsByUser(username: $username) {
      id
      title
    }
  }
`;
const FETCH_CITIES = gql`
  {
    getCities {
      name
      nameMK
      regionId
    }
  }
`;
export default FarmerForm;
