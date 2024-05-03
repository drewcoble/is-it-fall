"use client";

import { createTheme } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";
import useFall from "../hooks/useFall";

// const SPRING_COLORS = {
//   bg: "",
//   font: "",
// };

// const SUMMER_COLORS = {
//   bg: "",
//   font: "",
// };

// const FALL_COLORS = {
//   bg: ,
//   font: "#fff",
// };

// const WINTER_COLORS = {
//   bg: "#8899aa",
//   font: "",
// };

const FallTheme = () => {
  const { isFall } = useFall();
  const mode = "light";
  // const bg = isFall ? FALL_COLORS.bg : WINTER_COLORS.bg;
  // const fontColor = isFall ? FALL_COLORS.font : WINTER_COLORS.font;

  const fallPalette = createPalette({
    background: {
      default: "#8b4513",
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
      primary: "#fff",
      secondary: "#DEB887",
    },
  });
  // const winterPalette = createPalette({
  //   background: {
  //     default: "#8899aa",
  //   },

  //   mode: mode,
  //   primary: {
  //     contrastText: "#DEB887",
  //     main: "#8b4513",
  //   },
  //   secondary: {
  //     contrastText: "#efe3db",
  //     main: "#DEB887",
  //   },
  //   text: {
  //     primary: "#121212",
  //     secondary: "#DEB887",
  //   },
  // });

  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff1",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h4: {
            color: "#fff",
          },
          h5: {
            color: "burlywood",
          },
        },
      },
    },
    palette: fallPalette,
  });

  return theme;
};

export default FallTheme;
