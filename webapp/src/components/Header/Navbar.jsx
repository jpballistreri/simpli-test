import React from "react";
import { NavbarWrapper } from "./styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href="/">Inicio</a>
      <a href="/novedades">Novedades</a>
      <a href="/ultimas_ofertas">Ultimas ofertas</a>
      <a href="/sobre_nosotros">Sobre nosotros</a>
    </NavbarWrapper>
  );
}

export default Navbar;
