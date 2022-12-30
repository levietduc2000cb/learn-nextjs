import { red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// import { Roboto, Heebo } from "@next/font/google";

// export const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   fallback: ["Helvetica", "Arial", "sans-serif"],
// });

// export const heebo = Heebo({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
// });

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#FF6464",
    },
    secondary: {
      main: "#00ABCC",
      light: "#EDF7FA",
      dark: "#21243D",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: '"Heebo", sans-serif',
        color: "#21243D",
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "680px",
          "@media (min-width:600px)": {
            maxWidth: "680px",
          },
        },
        maxWidthMd: {
          maxWidth: "860px",
          "@media (min-width:900px)": {
            maxWidth: "860px",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
      styleOverrides: {
        root: {
          color: "black",
          "&.active": {
            color: "#FF6464",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: { color: "white" },
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: { color: "primary" },
          style: {
            color: "white",
            backgroundColor: "#142850",
            fontWeight: 900,
          },
        },
      ],
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
