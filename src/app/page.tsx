"use client";
import useFall from "./hooks/useFall";
import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import FallTheme from "./themes/FallTheme";
import TimeToFall from "./components/TimeToFall";
import "../css/AdsenseStylesheet.css";
import Header from "./components/Header";
import BuyMeALatte from "./components/BuyMeALatte";

export default function Home() {
  const { isFall, isLoading } = useFall();
  const fallString = isFall ? "YES" : "NO";

  const theme = FallTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Stack
        height="100dvh"
        width="100%"
        sx={{ alignItems: "center", justifyContent: "center", paddingTop: 0 }}
      >
        {isLoading ? (
          <CircularProgress sx={{ color: theme.palette.secondary.main }} />
        ) : (
          <>
            <Typography
              sx={{ fontWeight: "700", letterSpacing: 2 }}
              variant="h4"
            >
              {fallString}
            </Typography>
            <Stack
              spacing={2}
              sx={{
                alignItems: "center",
                bottom: 0,
                justifyContent: "center",
                position: "fixed",
                width: "100vw",
              }}
            >
              {/* <BuyMeALatte /> */}
              <TimeToFall />
            </Stack>
          </>
        )}
      </Stack>
    </ThemeProvider>
  );
}
