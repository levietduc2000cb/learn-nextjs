import React from "react";
import { Box, Stack, Link as MuiLink } from "@mui/material";
import { ROUTER_LIST } from "./router";
import Link from "next/link";

const HeaderMobile = () => {
  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Stack
        direction="column"
        spacing={0}
        justifyContent="center"
        alignItems="center"
      >
        {ROUTER_LIST.map((router, index) => {
          return (
            <Link key={index} href={router.path} legacyBehavior passHref>
              <MuiLink>{router.label}</MuiLink>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default HeaderMobile;
