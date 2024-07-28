"use client";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import FallTheme from "../themes/FallTheme";
import Header from "./Header";

const MainPageWrapper = ({ children }: { children: JSX.Element }) => {
  const theme = FallTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box minHeight="100dvh" p={3} pt="88px">
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default MainPageWrapper;
