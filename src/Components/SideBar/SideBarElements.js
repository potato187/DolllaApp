import { Button, ButtonWrapper, LinkScroll } from "Components/Styled";
import styled from "styled-components";

export const SideBarContainer = styled.nav`
  position: fixed;

  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;

  display: grid;
  visibility: visible;
  opacity: ${({ Open }) => (Open ? "100%" : "0")};
  top: ${({ Open }) => (Open ? "0" : "-100%")};
  transition: all 0.3s ease-in-out;
`;

export const SideBarWrapper = styled.div`
  color: #fff;
`;

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  margin-top: 80px;

  @media screen and (max-width: 479px) {
    grid-template-rows: repeat(6, 60px);
    margin-top: 60px;

    & li {
      height: 60px;
    }
  }
`;

export const SideBarItem = styled.li`
  height: 80px;
`;

export const SideBarLink = styled(LinkScroll)`
  height: 100%;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
  }
`;

export const SideBarSignIp = styled(ButtonWrapper)``;
export const SideBarButtonSignIn = Button;
