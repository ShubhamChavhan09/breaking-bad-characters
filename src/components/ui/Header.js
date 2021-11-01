import React from "react";
import styled from "styled-components";

import logo from "../../img/logo.png";

const Header = () => {
  return (
    <Head>
      <Img src={logo} alt="logo" />
    </Head>
  );
};

export default Header;

const Head = styled.header`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 200px;
`;
