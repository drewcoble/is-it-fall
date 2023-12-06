"use client";
import useFall from "./hooks/useFall";
import fallTheme from "./fallTheme";
import {
  AppBar,
  CircularProgress,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";

export default function Home() {
  const { isFall, isLoading } = useFall();
  const fallString = isFall ? "YES" : "NO";
  return (
    <ThemeProvider theme={fallTheme}>
      <AppBar
        elevation={0}
        sx={{ backgroundColor: "#fff1", justifyContent: "center", padding: 2 }}
      >
        <Typography sx={{ color: "burlywood", letterSpacing: 2 }} variant="h5">
          isitfall.us
        </Typography>
      </AppBar>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
          width: "100%",
        }}
      >
        {isLoading ? (
          <CircularProgress color="primary" />
        ) : (
          <Typography sx={{ fontWeight: "700", letterSpacing: 2 }} variant="h5">
            {fallString}
          </Typography>
        )}
      </Stack>
    </ThemeProvider>
  );
}
