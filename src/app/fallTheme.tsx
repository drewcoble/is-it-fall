"use client";

import { createTheme } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";

const fallPalette = createPalette({
  primary: {
    contrastText: "#efe3db",
    main: "#8b4513",
  },
  secondary: {
    main: "#0f0",
  },
});

const fallTheme = createTheme({
  palette: fallPalette,
});

export default fallTheme;
