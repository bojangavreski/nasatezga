import React,{useState,useEffect} from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SortList from './SortList';
const FilterDialog = (props) =>{
    const[open,setOpen] = useState(false);

    useEffect(() => {
        setOpen(props.filterDialog);
    },[props]);

    const handleClose= () =>{
        props.props();
    }

    return (
        <Dialog
        open={open}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle>
            <CloseIcon className="close-filter-icon" fontSize="large" onClick={() => handleClose()}></CloseIcon>
        </DialogTitle>
        <DialogContent>
        <SortList callback={props.callback} closeDialog={handleClose}/>
        </DialogContent>
      </Dialog>
    );
}

export default FilterDialog;