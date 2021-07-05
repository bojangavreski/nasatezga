import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const postImage = (img) => {
  const returnValue = {};
  const formData = new FormData();
  const header = new Headers();
  header.append("Authorization", "Client-ID 546c25a59c58ad7");
  formData.append("image", img);
  fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: header,
    body: formData,
  })
    .then((data) => data.json())
    .then((data) => (returnValue = data))
    .catch((err) => console.log(err));

  return returnValue;
};
function AddImage(props) {
  const [image, setImage] = useState();
  const updateImage = (event) => {
    event.preventDefault();
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    setImage(postImage(file).link);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: "none",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={updateImage}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onChange={updateImage}
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </>
  );
}
export default AddImage;
