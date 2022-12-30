import React from "react";
import { Box } from "@mui/material";
import HeaderDesktop from "./Header-desktop";
import HeaderMobile from "./Header-mobile";

const Header = () => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
};

export default Header;
