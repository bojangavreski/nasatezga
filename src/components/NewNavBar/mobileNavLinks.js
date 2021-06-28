import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { NavItem } from "reactstrap";
const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);
  return (
      <>
    <NavLinksContainer style={{zIndex:"100"}}>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper style= {{marginTop:"-7px"}}>
          <LinkItem>
          <NavItem className= "nav-item-n">
            <Link href="/">Почетна</Link>
            </NavItem>
          </LinkItem>
          
          <LinkItem>
          <NavItem className= "nav-item-n">
            <Link href="/biodiv">Биодиверзитет</Link>
            </NavItem>
          </LinkItem>
          <LinkItem>
          <NavItem className= "nav-item-n">
            <Link href="/avtohtoni">Автохтони Сорти</Link>
            </NavItem>
          </LinkItem>
        <LinkItem>
        <NavItem className= "nav-item-n">
          <Link href="/store">Продавница</Link>
          </NavItem>
          </LinkItem>
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
                <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
                .nav-item-n {
                  font-size: 17px;
                  font-family: 'Rubik', sans-serif;
                  text-decoration:none;
                  color: darkgreen;  
                }
                `}</style>
                </>
  );
}