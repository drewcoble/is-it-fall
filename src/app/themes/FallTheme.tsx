"use client";

import { createTheme } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";
import useFall from "../hooks/useFall";

const FallTheme = () => {
  const { isFall } = useFall();
  const mode = "light";
  const bg = isFall ? "#8b4513" : "#0088aa";
  const fontColor = isFall ? "#fff" : "#121212";

  const fallPalette = createPalette({
    background: {
      default: bg,
    },

    mode: mode,
    primary: {
      contrastText: "#DEB887",
      main: "#8b4513",
    },
    secondary: {
      contrastText: "#efe3db",
      main: "#DEB887",
    },
    text: {
      primary: fontColor,
      secondary: "#DEB887",
    },
  });

  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isFall ? "#fff1" : "#fff1",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h4: {
            color: isFall ? "#fff" : "#121212",
          },
          h5: {
            color: isFall ? "burlywood" : "#fff",
          },
        },
      },
    },
    palette: fallPalette,
  });

  return theme;
};

export default FallTheme;
