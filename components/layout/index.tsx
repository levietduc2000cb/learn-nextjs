import { Stack } from "@mui/system";
import { useEffect } from "react";
import { LayoutProps } from "../../models/common";
import { Box, Container } from "@mui/material";
import Footer from "../footer/Footer";
import Header from "../header";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
};

export default MainLayout;
