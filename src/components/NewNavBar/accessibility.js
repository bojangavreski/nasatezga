import React, {useContext} from 'react'
import {AuthContext} from '../../context/auth';
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { DeviceSize } from './DeviceSize';
import { useMediaQuery } from 'react-responsive';
const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

let RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #6adf76;
  background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #00c9ff;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 6px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #00c9ff;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #00c9ff;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  const isMobile = useMediaQuery({maxWidth : DeviceSize.mobile });
  const {user,logout} = useContext(AuthContext);
  const[setAnchorEl] = React.useState(null);
  console.log(user)
  const [auth] = React.useState(true);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  if (!user){
  return (
    <AccessibilityContainer>
  <a href= "/register"><RegisterButton style={{marginRight: '15px'}}>Регистрација</RegisterButton></a>
    <a href="/login"><LoginButton>Најава</LoginButton></a>
    </AccessibilityContainer>
  );
  }else {
    return (
<>
    {!isMobile?<a href="/" ><LoginButton onClick={logout} style= {{marginTop: "13px", marginRight:"10px" }}>Одјава</LoginButton></a>: <a href="/" ><LoginButton onClick={logout}>Одјава</LoginButton></a> }
    {auth && (   

      <div >
        <div style={{}}>
         <span style={{color:"darkgreen",margin:"auto auto auto 10px"}}> Профил </span> 
        </div>
        <IconButton 
          style = {{color:"darkgreen", margin:"auto 13px"}}
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          href={`/profile/${user.id}`}
        >
          <AccountCircle />
        </IconButton >
       
      </div>
    )}
    </>
    )
  }

}
