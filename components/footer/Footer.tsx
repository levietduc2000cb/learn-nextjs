import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { Container } from "@mui/system";

const socialIconList = [
  {
    icon: Facebook,
    path: "/home",
  },
  {
    icon: Instagram,
    path: "/home",
  },
  {
    icon: Twitter,
    path: "/home",
  },
  {
    icon: LinkedIn,
    path: "/home",
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      px={2}
      textAlign="center"
      paddingBottom={6.25}
      marginTop={14.25}
    >
      <Stack direction="row" justifyContent="center">
        <Stack direction="row" spacing={4.375}>
          {socialIconList?.map((social, index) => {
            return (
              <Box
                key={index}
                component="a"
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component={social.icon}
                  fontSize={40}
                  color="secondary.dark"
                ></Box>
              </Box>
            );
          })}
        </Stack>
      </Stack>
      <Typography marginTop={3.25}>
        Copyright ©2020 All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
