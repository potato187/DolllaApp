import React from "react";
import { MenuWrapper, MenuIcon } from "./MobileMenuElements";

function MobileMenu({ toggle, isOpen }) {
  const handleOnClick = () => {
    if (toggle) {
      toggle();
    }
  };

  return (
    <>
      <MenuWrapper onClick={handleOnClick} Open={isOpen}>
        <MenuIcon Open={isOpen} />
      </MenuWrapper>
    </>
  );
}

MobileMenu.defaultProps = {
  toggle: null,
  isOpen: false,
};

export default MobileMenu;
