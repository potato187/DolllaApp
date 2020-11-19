import styled from "styled-components";
import {
  LinkScroll,
  LinkRoute,
  Button,
  ButtonWrapper,
  Container,
} from "../Styled";

const height = "80px";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${height};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

export const NavBarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${height};
`;

export const Logo = styled(LinkRoute)`
  justify-self: flex-start;
  font-size: 30px;
  color: #fff;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: ${height};
`;

export const NavLinkScroll = styled(LinkScroll)`
  height: 100%;
  padding: 0 1rem;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavSignIn = styled(ButtonWrapper)`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavButtonSignIn = Button;
