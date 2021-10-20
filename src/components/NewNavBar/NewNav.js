import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { MobileNavLinks } from "./mobileNavLinks";
import { DeviceSize } from "./DeviceSize";
import LogoNav from '../Images/Logo.png'
import { Image } from "semantic-ui-react";
const NavbarContainer = styled.div`
  width: 100%;
  height: 73px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function NewNav(props) {

  const isMobile = useMediaQuery({maxWidth : DeviceSize.mobile });
  return (
    <NavbarContainer>
      <div>
      <Image src= {LogoNav}/>
      </div>
      <LeftSection>
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}
