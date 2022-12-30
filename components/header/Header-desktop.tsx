import { Box, Link as MuiLink, Stack } from "@mui/material";
import { Container } from "@mui/system";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTER_LIST } from "./router";

const HeaderDesktop = () => {
  const router = useRouter();

  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ paddingY: 4.5 }}
          spacing={4.5}
        >
          {ROUTER_LIST.map((route, index) => {
            return (
              <Link key={index} href={route.path} legacyBehavior passHref>
                <MuiLink
                  fontWeight={500}
                  className={clsx({ active: router.pathname === route.path })}
                  sx={{ "&:hover": { color: "#FF6464" } }}
                >
                  {route.label}
                </MuiLink>
              </Link>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderDesktop;
