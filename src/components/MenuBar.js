import React, { useState,useContext} from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../context/auth';
const  MenuBar = () => {
  const {user,logout} = useContext(AuthContext);
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name)

  const menuBar = user ? ( 
  <Menu pointing secondary size="massive" color="teal">
  <Menu.Item
    name={user.email}
    active
    as={Link}
    to={`/profile/${user.id}`}
  />

  <Menu.Menu position='right'>
  <Menu.Item
    name='Одјави се'
    onClick={logout}
    as={Link}
    to="/"
  />
  </Menu.Menu>
</Menu>
) : (
    <Menu pointing secondary size="massive" color="teal">
  <Menu.Item
    name='Продавница'
    active={activeItem === 'Продавница'}
    onClick={handleItemClick}
    as={Link}
    to="/store"
  />

  <Menu.Menu position='right'>
  <Menu.Item
    name='Најава'
    active={activeItem === 'Најава'}
    onClick={handleItemClick}
    as={Link}
    to="/login"
  />
    <Menu.Item
      name='Регистрација'
      active={activeItem === 'Регистрација'}
      onClick={handleItemClick}
      as={Link}
      to="/register"
    />
  </Menu.Menu>
</Menu>
)
    return menuBar
}
export default MenuBar;