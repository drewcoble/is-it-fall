"use client";

import { createTheme } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";

const fallPalette = createPalette({
  primary: {
    contrastText: "#efe3db",
    main: "#8b4513",
  },
  secondary: {
    contrastText: "#efe3db",
    main: "#800000",
  },
});

const fallTheme = createTheme({
  palette: fallPalette,
});

export default fallTheme;
