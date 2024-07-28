"use client";
import React from "react";
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import Header from "../components/Header";
import FallTheme from "../themes/FallTheme";

export default function Info() {
  const theme = FallTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box pt={12}>
        <Typography>Supporters</Typography>
      </Box>
    </ThemeProvider>
  );
}
