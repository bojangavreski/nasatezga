import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import {AuthContext} from '../../context/auth';

import {
    Container,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
  } from "reactstrap";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  navbar: {
    background: 'rgba(0,0,0,0.5)', 
   
  },

  menuButton: {

    marginRight: theme.spacing(2),
  },
  appbarTitle: {
    flexGrow: '1',
 
  },
  colorText: {
    color: '#5AFF3D',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const {user,logout} = useContext(AuthContext);
  console.log(user)
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
if(!user){
return(<div className={classes.root}>

      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <h1 className={classes.appbarTitle}>
          Тезга<span className={classes.colorText}>-мк</span>
        </h1>
        <NavItem className="nav-item-n">
              <NavLink href="/" className= "">Почетна</NavLink>
            </NavItem>
            
            <NavItem className="nav-item-n">
            <NavLink href="/biodiv">Биодиверзитет</NavLink>
          </NavItem>
          <NavItem className="nav-item-n">
            <NavLink href="/avtohtoni">Автохтони сорти</NavLink>
            <NavLink href="/store">Продавница</NavLink>
            <NavLink href="/subscription" target="_blank">Претплата</NavLink>
            <NavLink href="/login">Најава</NavLink>
            
            <NavLink href="/register"> Регистрација </NavLink>
         
            
          </NavItem>
          
        
          <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
          .scroll-nav {
            display:none;
            
          }
        
          .nav-n {
            align-items: center;
           margin-top:30px;
          }
          .nav-item-n {
            display: none;
            font-size: 17px;
            font-family: 'Rubik', sans-serif;
            text-decoration:none;
          }
          .nav-item-n:not(.logo) {
            text-transform: capitalize;
          }
          .nav-item-n a {
            padding: 0.5rem 0.6rem;
            color: inherit;
            text-decoration:none;
          }
          .nav-item-n:not(.ham):not(.logo):hover {
            color: var(--brand-color);
          }
          .logo {
            font-family: "Philosopher", sans-serif;
            font-size: 2em;
          }
          .logo:first-letter {
            color: #00c939;
          }
          @media (min-width: 1024px) {
            .nav-item-n {
              display: block;
            }
          }
          .logo,
          .ham {
            display: block;
          }
          .ham {
            margin-left: auto;
            font-size: 1.4rem;
          }
          @media (min-width: 1024px) {
            .ham {
              display: none;
            }
            .logo {
              margin-right: auto;
            }
          }
          .drop {
            position: relative;
          }
          .drop__item {
            position: absolute;
            display: none;
            transition: all 0.5s;
            width: 200px;
            padding: 0.5rem 0;
            opacity: 0;
            box-shadow: 0px 0px 20px 0px #f1f1f1d1, 0px 0px 20px 0px #ffffff2b;
            z-index: 3;
          }
          .drop__item .nav {
            align-items: flex-start;
          }
          .drop__item a {
            padding: 0.65rem 1.3rem;
          }
          .caret:after {
            content: "";
            display: inline-block;
            vertical-align: middle;
            margin-left: 5px;
            width: 5px;
            height: 5px;
            border: none;
            border-left: 2px solid;
            border-bottom: 2px solid;
            transform: rotate(-45deg);
          }
        `}</style>

          {/*auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
              </Menu>
            </div>
              )*/}
        </Toolbar>
      </AppBar>
    </div>
);
}else{
return (<div className={classes.root}>

  <AppBar position="static" className={classes.navbar}>
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <h1 className={classes.appbarTitle}>
      Тезга<span className={classes.colorText}>-мк</span>
    </h1>
    <NavItem className="nav-item-n">
    <NavLink href="/" className= "">Почетна</NavLink>
            </NavItem>
            
            <NavItem className="nav-item-n">
            <NavLink href="/biodiv">Биодиверзитет</NavLink>
          </NavItem>
          <NavItem className="nav-item-n">
            <NavLink href="/avtohtoni">Автохтони сорти</NavLink>
            <NavLink href="/store">Продавница</NavLink>
            <NavLink href="/subscription" target="_blank">Претплата</NavLink>
          </NavItem>

      <NavItem className="nav-item-n">
      <NavLink href="/" onClick={logout} >Одјава</NavLink>
      </NavItem>
      
    
      <style jsx>{`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
      .scroll-nav {
        display:none;
        
      }
    
      .nav-n {
        align-items: center;
       margin-top:30px;
      }
      .nav-item-n {
        display: none;
        font-size: 17px;
        font-family: 'Rubik', sans-serif;
        text-decoration:none;
      }
      .nav-item-n:not(.logo) {
        text-transform: capitalize;
      }
      .nav-item-n a {
        padding: 0.5rem 0.6rem;
        color: inherit;
        text-decoration:none;
      }
      .nav-item-n:not(.ham):not(.logo):hover {
        color: var(--brand-color);
      }
      .logo {
        font-family: "Philosopher", sans-serif;
        font-size: 2em;
      }
      .logo:first-letter {
        color: #00c939;
      }
      @media (min-width: 1024px) {
        .nav-item-n {
          display: block;
        }
      }
      .logo,
      .ham {
        display: block;
      }
      .ham {
        margin-left: auto;
        font-size: 1.4rem;
      }
      @media (min-width: 1024px) {
        .ham {
          display: none;
        }
        .logo {
          margin-right: auto;
        }
      }
      .drop {
        position: relative;
      }
      .drop__item {
        position: absolute;
        display: none;
        transition: all 0.5s;
        width: 200px;
        padding: 0.5rem 0;
        opacity: 0;
        box-shadow: 0px 0px 20px 0px #f1f1f1d1, 0px 0px 20px 0px #ffffff2b;
        z-index: 3;
      }
      .drop__item .nav {
        align-items: flex-start;
      }
      .drop__item a {
        padding: 0.65rem 1.3rem;
      }
      .caret:after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
        width: 5px;
        height: 5px;
        border: none;
        border-left: 2px solid;
        border-bottom: 2px solid;
        transform: rotate(-45deg);
      }
    `}</style>

      {auth && (
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            href={`/profile/${user.id}`}
          >
            <AccountCircle />
          </IconButton >
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
          </Menu>
        </div>
      )}
    </Toolbar>
  </AppBar>
</div>
);
          }

}
