import React, { useEffect, useState } from "react";
import {
  Nav,
  NavBarContainer,
  Logo,
  NavMenu,
  NavItem,
  NavLinkScroll,
  NavSignIn,
  NavButtonSignIn,
} from "./NavBarElements.js";
import { animateScroll as Scroll } from "react-scroll";
const Navigator = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const handleScrollNav = () =>
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNav);

    return () => {
      window.removeEventListener("scroll", handleScrollNav);
    };
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <Logo to="/home" onClick={() => Scroll.scrollToTop()}>
            Dolla
          </Logo>
          <NavMenu>
            <NavItem>
              <NavLinkScroll
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                children="about"
              />
            </NavItem>
            <NavItem>
              <NavLinkScroll
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                children="discover"
              />
            </NavItem>
            <NavItem>
              <NavLinkScroll
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                children="services"
              />
            </NavItem>
            <NavItem>
              <NavLinkScroll
                to="sign-in"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                children="sign up"
              />
            </NavItem>
          </NavMenu>
          <NavSignIn>
            <NavButtonSignIn
              to="/sign-in"
              children="sign in"
              primary={1}
              dark={0}
            />
          </NavSignIn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navigator;
