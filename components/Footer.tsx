import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const socialIconList = [
  {
    icon: Facebook,
    paht: "/home",
  },
  {
    icon: Instagram,
    paht: "/home",
  },
  {
    icon: Twitter,
    paht: "/home",
  },
  {
    icon: LinkedIn,
    paht: "/home",
  },
];

const Footer = () => {
  return (
    <Box component="footer" px={2} textAlign="center">
      <Stack>
        <Box component="a" href="/home"></Box>
      </Stack>
      <Typography>Copyright ©2020 All rights reserved </Typography>
    </Box>
  );
};

export default Footer;
