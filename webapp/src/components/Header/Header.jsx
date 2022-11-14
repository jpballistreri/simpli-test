import React, { useState } from "react";
import { HeaderWrapper } from "./styles/Header";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import styled from "styled-components";
import LogoPng from "../../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const Logo = styled.img`
    margin-left: auto;
    margin-right: auto;
  `;

  return (
    <HeaderWrapper>
      <Logo src={LogoPng} />
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;
