import React, { useEffect, useState } from "react";
import { Fragment } from "react";

import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  createMuiTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  ThemeProvider,
} from "@material-ui/core";


import { makeStyles } from "@material-ui/styles";
import { red, green } from "@material-ui/core/colors";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import PersonIcon from "@material-ui/icons/Person";
import DetailsCard from "./DetailsCard";
const MONTHS = [
  "Јан",
  "Фев",
  "Мар",
  "Апр",
  "Мај",
  "Јун",
  "Јул",
  "Авг",
  "Сеп",
  "Окт",
  "Нов",
  "Дек",
];
const printDate = (date) => {
  const d = new Date(date);
  return `${d.getDate()}-${MONTHS[d.getMonth()]}-${d.getFullYear()}`;
};
const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    margin: " 10px",
    height: "auto",
    width: "300px",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function DetailsDialog(){
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};
return (
  <Fragment>   
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email     address here. We will send updates
              occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="default">
              Add
            </Button>
            <Button onClick={handleClose} color="default">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        
      </Fragment>
)
}
function PostCard(props) {
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);

  const uId = props.product.creator;
  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: {
      uId,
    },
  });


  useEffect(() => {
    if (data) {
      setUser(data.getUser);
    }
  }, [data]);

  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  const openProductDetails  = () => {
    setOpen(true);
  };

  const closeProductDetailsDialog = () => { 
    setOpen(false);
  }
  return (
    <Card className={classes.typography}>
      <CardHeader
        title={props.product.title}
        subheader={printDate(props.product.createdAt)}
      />
      <CardMedia className={classes.media} image={props.product.images[0]} />
      <CardContent>
        <div className="product-description">
          <p>{props.product.description}</p>
        </div>
      </CardContent>
      <CardActions>
        <div className="product-card-footer">
          <div className="seller-name">
            <h4
              onClick={() =>
                alert("Наскоро ќе ја отвара страната на продавачот")
              }
            ></h4>
          </div>
          <div style={{ margin: "auto auto auto 180px" }}>
            <ThemeProvider theme={theme}>
              <Grid >
                <Grid >
                  <Button
                    className="button-mui"
                    variant="contained"
                    style={{ paddingBottom: "0px" }}
                    color="primary"
                    onClick={openProductDetails}
                  > 
                    <p> Види повеќе </p>
                  </Button>
                </Grid>
                <Grid >
                  <Button
                    className="button-mui"
                    variant="contained"
                    style={{ paddingBottom: "0px" }}
                    color="primary"
                    onClick={() => props.trigger()}
                  >
                    <p> Нарачај </p>
                  </Button>
                </Grid>
              </Grid>
              <DetailsCard setDialogOpen={open} setDialogClosed={closeProductDetailsDialog}/>
            </ThemeProvider>
          </div>
        </div>
      </CardActions>
    </Card>
  );
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
