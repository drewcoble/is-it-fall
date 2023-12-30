"use client";
import useFall from "./hooks/useFall";
import {
  AppBar,
  CircularProgress,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import FallTheme from "./themes/FallTheme";

export default function Home() {
  const { isFall, isLoading } = useFall();
  const fallString = isFall ? "YES" : "NO";
  const theme = FallTheme();

  // console.log(isFall);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar elevation={0} sx={{ justifyContent: "center", padding: 2 }}>
        <Typography sx={{ letterSpacing: 2 }} variant="h5">
          isitfall.us
        </Typography>
      </AppBar>
      <Stack
        sx={{
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
          paddingTop: 8,
          width: "100%",
        }}
      >
        {isLoading ? (
          <CircularProgress
            sx={{ color: isFall ? theme.palette.secondary.main : "#fff9" }}
          />
        ) : (
          <Typography sx={{ fontWeight: "700", letterSpacing: 2 }} variant="h4">
            {fallString}
          </Typography>
        )}
      </Stack>
    </ThemeProvider>
  );
}
