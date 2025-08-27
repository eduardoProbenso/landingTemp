import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#005593", // Azul branding
    },
    secondary: {
      main: "#00ABC0", // Turquesa/acento
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#213547",
      secondary: "#5f6c7b",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#006AAF",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#03436B",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#00ABC0",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#213547",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#213547",
    },
    body2: {
      fontSize: "0.9rem",
      color: "#213547",
    },
    caption: {
      fontSize: "0.75rem",
      color: "#213547",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
        },
      },
      variants: [
        {
          props: { variant: "gradient" },
          style: {
            borderRadius: 8,
            padding: "10px 0",
            fontWeight: "bold",
            textTransform: "none",
            background: "linear-gradient(90deg, #006AAF 4.4%, #00ABC0 100%)",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(90deg, #005a95 4.4%, #0094a7 100%)",
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;
