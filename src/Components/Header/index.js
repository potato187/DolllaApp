import MobileMenu from "Components/MobileMenu";
import Navigator from "Components/Navigator";
import SideBar from "Components/SideBar";
import React, { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleReSize = () => (window.innerWidth >= 767 ? setIsOpen(false) : 0);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener("resize", handleReSize);
  }, []);

  return (
    <header>
      <Navigator toggle={toggle} />
      <MobileMenu toggle={toggle} isOpen={isOpen} />
      <SideBar toggle={toggle} isOpen={isOpen} />
    </header>
  );
}

export default Header;
