"use client";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import FallTheme from "../themes/FallTheme";
import Header from "./Header";
import { FallContext } from "../contexts/fallContext";
import { ReactNode, useState } from "react";

const MainPageWrapper = ({
  children,
}: {
  children: JSX.Element | ReactNode;
}) => {
  const [isFall, setIsFall] = useState<boolean | undefined>();
  const fallContextValue = {
    isFall,
    setIsFall,
  };
  const theme = FallTheme();

  return (
    <FallContext.Provider value={fallContextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box height="100dvh" minHeight="100dvh" p={3} pt="88px">
          {children}
        </Box>
      </ThemeProvider>
    </FallContext.Provider>
  );
};

export default MainPageWrapper;
