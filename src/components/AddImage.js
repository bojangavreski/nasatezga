import React, { useState } from "react";
import { makeStyles } from '@material-ui/styles';
import { IconButton } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const postImage = async (img) => {
  let returnValue = {};
  const formData = new FormData();
  const header = new Headers();
  header.append("Authorization", "Client-ID 546c25a59c58ad7");
  formData.append("image", img);
  await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: header,
    body: formData,
  }).then(data => data.json())
    .then(data => {
      returnValue = data}).catch((err) => console.log(err));
  return returnValue;
};
function AddImage(props) {
  const [image, setImage] = useState();
  const updateImage = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    let postedImage = await postImage(file);
    props.props(postedImage.data.link)
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
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
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </>
  );
}
export default AddImage;
