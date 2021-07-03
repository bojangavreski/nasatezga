import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Button,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core";
import { red,green } from "@material-ui/core/colors";
import gql from "graphql-tag";
import { AuthContext } from "../context/auth";
import { useQuery } from "@apollo/react-hooks";
import PersonIcon from '@material-ui/icons/Person';
const MONTHS = [
  'Јан',
  'Фев',
  'Мар',
  'Апр',
  'Мај',
  'Јун',
  'Јул',
  'Авг',
  'Сеп',
  'Окт',
  'Нов',
  'Дек'
];
const printDate= (date)=>{
  const d = new Date(date);
  return `${d.getDate()}-${MONTHS[d.getMonth()]}-${d.getFullYear()}`;
}
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

 
function PostCard(props) {
  const[user,setUser]=useState({});
  const uId = props.product.creator;
  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: {
      uId,
    },
  });
  
  useEffect(()=>{
    if(data){
      setUser(data.getUser);
    }
  },[data]);

  const classes = useStyles();


   
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

  return (
    <Card className="product-card">
      <CardHeader title={props.product.title} subheader={printDate(props.product.createdAt)} />
      <CardMedia className={classes.media} image={props.product.image} />
      <CardContent>
        <div className="product-description">
          <p>
        {props.product.description}
          </p>
        </div>
        </CardContent>
      <CardActions>
        <div className="product-card-footer">
        <div className="seller-name">
          <h4 onClick={() => alert("Наскоро ќе ја отвара страната на продавачот")}>
            <PersonIcon/>
              {user.name}
          </h4>
        </div>
        <div className="order-button">
        <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" onClick={() => props.trigger()}>
           <p> Нарачај </p>
        </Button>
      </ThemeProvider>
        </div>
        </div>
      </CardActions>
    </Card>
  )
}

export default PostCard;

const GET_USER_QUERY = gql`
  query ($uId: ID!) {
    getUser(uId: $uId) {
      name
      telephone
    }
  }
`;

// const DELETE_PRODUCT_MUTATION = gql`
//   mutation deleteProduct($pId: ID!) {
//     deleteProduct(pId: $pId)
//   }
// `;
// const [deleteProduct, { error }] = useMutation(DELETE_PRODUCT_MUTATION, {
//   variables: {
//     pId,
//   },
// });


