import React,{useContext,useEffect,useState} from 'react';
import {useQuery}  from '@apollo/react-hooks';
import {Grid} from 'semantic-ui-react';
import {Card,CardHeader,IconButton,CardContent,CardMedia,Avatar,makeStyles,LinearProgress } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import {FETCH_PRODUCTS_QUERY} from '../util/graphql';
import FilterDialog from '../components/FilterDialog';
import PostCard from "../components/PostCard";
import SortList from "../components/SortList";
import "../App.css";
import OrderProductDialog from './OrderProductDialog';
import "../components/DetailsCard";
import DetailsCard from '../components/DetailsCard';


const isStringIncluded = (includes, included) => {
  return includes.toLowerCase().includes(included.toLowerCase());
} 
const Store = (props) => {
   const [dialog,setDialog] =useState(false);
   const [region,setRegion] = useState(0);
   const [searchBoxContent,setSearchBoxContent] = useState('');

   const [filterDialog,setFilterDialog] = useState(false);
   const [categories, setCategories] = useState({});
   const sortProducts = (filter,region,search) => {
    var isEmpty=true;
    var fullState = {};
    setSearchBoxContent(search);
    setRegion(region);
     for(const [key,value] of Object.entries(filter)){
       fullState[key]=true;
        if(value===true){
          isEmpty=false;
          break;
        }
     }
     if(!isEmpty){
    setCategories(filter)
  }else{
    setCategories(fullState)
  }
 }  
  const trigger = () => {
    setDialog(!dialog);
  }
  const openFilterDialog = ()=>{
    setFilterDialog(true);
  }
  const closeFilterDialog = ()=>{
    setFilterDialog(false);
  }
  useEffect(()=>{
    if(!props.match.params.searchTerm){
    setSearchBoxContent('');
    }else{
      setSearchBoxContent(props.match.params.searchTerm);
    }
  },[]);
    var gridClass = 'product-list';
    const { loading, data } = useQuery(FETCH_PRODUCTS_QUERY,{
      onError(err){
        console.log(err);
      }
    });  
    if(!data || loading) {
      gridClass = 'loading-spinner';
    }
    return (
      <>
      <IconButton color="primary" aria-label="upload picture" component="span" className="filter-icon" onClick={() => openFilterDialog()}>
        <FilterListIcon fontSize="large"></FilterListIcon>
      </IconButton >
      <FilterDialog props={closeFilterDialog} filterDialog={filterDialog} callback={sortProducts} searchBox={setSearchBoxContent}/>
      <OrderProductDialog dialog={dialog} trigger={trigger}/>
      <div className='wrapper'>
      <SortList callback={sortProducts} className="sort-list-store"/>
      <Grid className={gridClass}>
      {!loading && data ? data.getProducts.filter(product =>{
        if(!region){
        return categories[product.category] === true
        }else if(product.region!=null && region){
            return categories[product.category] === true && product.region===region;
        }else{
          return false;
        }
      }).map(
        product => {
      if(searchBoxContent === ''){
        return <PostCard key={product.id} product={product} trigger={trigger}/>
      }else if(isStringIncluded(product.producer,searchBoxContent) || isStringIncluded(product.title,searchBoxContent)){ 
        return <PostCard key={product.id} product={product} trigger={trigger}/>
      } 
      }) : <LinearProgress className="spinner"/>}
      </Grid>
      </div>
      </>
    );
  };
  
  
  export default Store;
  