import React,{useContext,useState} from 'react';
import {useQuery}  from '@apollo/react-hooks';
import {Grid, Transition,Container} from 'semantic-ui-react';

import {FETCH_PRODUCTS_QUERY} from '../util/graphql';
import PostCard from "../components/PostCard";
import SortList from "../components/SortList";

import { AuthContext } from "../context/auth";
//import PostForm from "../components/PostForm";
import "../App.css";
const Store = () => {
    const [selected,setSelected] = useState('');

    /*
    const populateSelected= (category) => {
      if(selected.has(category)){
          selected.delete(category);
      }else{
      selected.add(category);
      }
      console.log(selected);
  }
  */
    const { user } = useContext(AuthContext);
    const { loading, data } = useQuery(FETCH_PRODUCTS_QUERY);
    if (!data) {
      return <h1>Вчитува...</h1>
    }
    return (
      <Grid columns={2} fluid style={{marginTop:100}}>
      <SortList props={setSelected} />
      <Grid columns={2} style={{marginLeft: 30, marginTop: -80, width:'70%', float: 'right'}} > 
        <Grid.Row className="page-title">
          <h1>Продукти</h1>
        </Grid.Row>
        <Grid.Row columns={2} fluid={false}>
          {/*user && (
            <Grid.Column>
              <PostForm />
            </Grid.Column>
          )*/}
          {loading ? (
            <h1>Вчитува...</h1>
          ) : (
            <>
              {data.getProducts && data.getProducts.filter(product=>{
                return product.category === selected;
              }).map((product) => (
              <Grid.Column key={product.id} style={{ marginBottom: 20 }} width={4} fluid={false}>
                <PostCard product={product} />
              </Grid.Column>
            ))}
            </>
          )}
        </Grid.Row>
      </Grid>
      </Grid>
    );
  };
  
  
  export default Store;
  