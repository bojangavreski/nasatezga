import React, { useEffect, useState } from "react";
import AddImage from "./AddImage";
import { Form, ImageGroup } from "semantic-ui-react";
import gql from "graphql-tag";
import { useForm } from "../util/hooks";
import { useMutation, useQuery } from "@apollo/react-hooks";
import "../App.css";

import {
  Container,
  Typography,
  TextField,
  CssBaseline,
  Button,
  makeStyles,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
const CATEGORIES = require("../util/categories");

function ProductForm(props) {
  const [cities, setCities] = useState([]);
  const { loading, data } = useQuery(FETCH_CITIES);

  const { values, onChange, onSubmit } = useForm(createProductCallback, {
    title: "",
    description: "",
    location: "",
    image: "",
    category: "",
    region: "",
    creator: props.user.id,
  });

  const username = props.user.email;

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#03941b",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#03941b",
    },
  }));
  const classes = useStyles();
  const [createProduct, { error }] = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_PRODUCTS_BY_USER_QUERY,
        variables: {
          username,
        },
      });
      //data.getPosts = [result.data.createPost, ...data.getPosts];
      //data.getProducts = [result.data.createProduct, ...data.getProducts];

      proxy.writeQuery({
        query: FETCH_PRODUCTS_BY_USER_QUERY,
        data: {
          getProductsByUser: [
            ...data.getProductsByUser,
            result.data.createProduct,
          ],
        },
      });
      values.title = "";
      values.description = "";
      values.location = "";
      values.image = "";
      values.category = "";
      values.region = "";
      values.creator = "";
    },
  });
  function createProductCallback() {
    createProduct().catch((e) => {});
  }
  const cityHandler = (location) => {
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].name === location) {
        values.region = cities[i].regionId;
        break;
      }
    }
  };
  useEffect(() => {
    if (data) {
      setCities(data.getCities);
    }
    cityHandler(values.location);
  }, [data, values.location]);

  const setImage = (data) => {
    if (data) {
      values.image = data.data.link;
      console.log(values.image);
      console.log(data);
    } else {
      console.log(data);
    }
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
            id="title"
            label="Наслов"
            name="title"
            onChange={onChange}
            value={values.title}
            error={error ? true : false}
            autoComplete="title"
            autoFocus
          />
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
            error={error ? true : false}
            autoComplete="title"
            autoFocus
          />
          <AddImage props={setImage} />
          <InputLabel
            className=".select-label"
            id="demo-simple-select-helper-label"
          >
            Град
          </InputLabel>
          <Select
            className="select-field"
            name="location"
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.location}
            onChange={onChange}
            required
          >
            {cities ? (
              cities.map((city) => {
                return <MenuItem value={city.name}>{city.nameMK}</MenuItem>;
              })
            ) : (
              <MenuItem>city.nameMK</MenuItem>
            )}
          </Select>

          <InputLabel
            className=".select-label"
            id="demo-simple-select-helper-label"
          >
            Категорија
          </InputLabel>
          <Select
            className="select-field"
            name="category"
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.category}
            onChange={onChange}
            required
          >
            {CATEGORIES.map((category) => {
              return <MenuItem value={category.cat}>{category.catMK}</MenuItem>;
            })}
          </Select>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={values.image === "" ? true : false}
          >
            Постави
          </Button>
        </form>
      </div>
    </Container>
  );
}

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
export default ProductForm;
