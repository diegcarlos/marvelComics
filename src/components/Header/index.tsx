import React from "react";

import { Container, ContainerLogo, ImageLogo } from "./styled";

import Logo from "../../assets/marvel_logo.png";
import Search from "../Search";

const Header: React.FC = () => {
  return (
    <Container>
      <ContainerLogo>
        <ImageLogo src={Logo} alt="Logo Marvel" />
        <Search />
      </ContainerLogo>
    </Container>
  );
};

export default Header;
