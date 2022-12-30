import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import Avatar from "../../assest/img/avatar.png";

const HeroSection = () => {
  return (
    <Box marginTop={{ xs: 4, md: 20 }} paddingBottom={{ xs: 7.25, md: 8.8 }}>
      <Container>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={{ xs: 5.3, md: 8 }}
          alignItems="center"
        >
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h3"
              marginBottom={{ xs: 2.6, md: 5 }}
              fontWeight={700}
            >
              Hi, I am Duc
              <br />
              Front-end Developer
            </Typography>
            <Typography
              sx={{ fontWeight: "400" }}
              marginBottom={{ xs: 3.3, md: 4.7 }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Download Resume
            </Button>
          </Box>
          <Box>
            <Box
              sx={{
                width: { xs: "170.86px", md: "243px" },
                height: { xs: "170.86px", md: "243px" },
                borderRadius: "100%",
                overflow: "hidden",
                position: "relative",
                boxShadow: "-5px 13px",
                color: "secondary.light",
              }}
            >
              <Image src={Avatar} alt="avatar" fill placeholder="blur" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
