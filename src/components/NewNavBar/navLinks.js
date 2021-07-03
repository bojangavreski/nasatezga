import React from "react";
import styled from "styled-components";
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
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  // eslint-disable-next-line no-undef



  
  return (
    <>
    <NavLinksContainer>
      <LinksWrapper>
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
            <Link href="/ZaNas">За Нас</Link>
            </NavItem>
          </LinkItem>
        <LinkItem>
        <NavItem className= "nav-item-n">
          <Link href="/store">Продавница</Link>
          </NavItem>
        </LinkItem>
        
      </LinksWrapper>
    </NavLinksContainer>
            <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
            .nav-item-n {
              font-size: 17px;
              font-family: 'Rubik', sans-serif;
              text-decoration:none;
              
            }
          
            `}</style>
            </>
  );
}