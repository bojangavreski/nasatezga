import React,{useState,useEffect} from 'react';
import {FormControlLabel,Checkbox,FormControl, Button,FormGroup} from '@material-ui/core';
import "../App.css";
const CATEGORIES =require('../util/categories');


const SortList = (props) => {
  const [formState,setFormState] = useState(false);
  useEffect(() => {
  },[formState]);
 const initialPopulate = () => { 
  var initialState = {};
  var initialRenderState = {};
  CATEGORIES.forEach(cat => {
      let catName = cat.cat;
      initialState[catName] = false;
      initialRenderState[catName] = true;
  })
  setFormState(initialState);
  props.callback((initialRenderState));
}
if(!formState){
  initialPopulate();
}
  
  const handleChange = async (event) => {
      await setFormState({...formState,[event.target.name]:event.target.checked})
  }
 return (
  <div className="filter">
    <FormControl>
      <h4>Категории</h4>
      <FormGroup>
  {CATEGORIES.map(cat => {
    return (
    <FormControlLabel
      className="cat-option"
      control={
        <Checkbox
          color="primary"
          checked= {formState[cat.cat]}
          onChange={handleChange}
          name={cat.cat}
          value={formState[cat.cat]}
        />
      }
      label={cat.catMK}
    />)
  })} 
    <Button variant="contained" color="primary" className="sort-button" onClick={
      () => { 
        props.callback(formState);
        if(props.closeDialog){
          props.closeDialog();
        }    
      }
      }>Пребарај</Button>
  </FormGroup>
  </FormControl> 
  </div>
 )
}

export default SortList;