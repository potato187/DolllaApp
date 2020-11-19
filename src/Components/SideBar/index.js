import React from "react";
import {
  SideBarContainer,
  SideBarMenu,
  SideBarWrapper,
  SideBarLink,
  SideBarButtonSignIn,
  SideBarSignIp,
  SideBarItem,
} from "./SideBarElements";

function SideBar({ isOpen, toggle }) {
  const handleOnClick = () => {
    if (toggle) {
      toggle();
    }
  };
  return (
    <>
      <SideBarContainer Open={isOpen}>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarItem>
              <SideBarLink
                to="about"
                children="about"
                onClick={handleOnClick}
              />
            </SideBarItem>
            <SideBarItem>
              <SideBarLink
                to="discover"
                children="discover"
                onClick={handleOnClick}
              />
            </SideBarItem>
            <SideBarItem>
              <SideBarLink
                to="services"
                children="services"
                onClick={handleOnClick}
              />
            </SideBarItem>
            <SideBarItem>
              <SideBarLink
                to="sign-in"
                children="sign up"
                onClick={handleOnClick}
              />
            </SideBarItem>
          </SideBarMenu>
          <SideBarSignIp>
            <SideBarButtonSignIn
              large={1}
              primary={1}
              to="/sign-in"
              children="sign in"
            />
          </SideBarSignIp>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
}

SideBar.defaultProps = {
  toggle: null,
  isOpen: false,
};
export default SideBar;
