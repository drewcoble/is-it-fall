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

  // const colorGrid = (
  //   <>
  //     <Stack direction="row">
  //       <div
  //         style={{
  //           backgroundColor: "#2E4B77",
  //           height: "200px",
  //           width: "200px",
  //         }}
  //       >
  //         deep blue
  //       </div>
  //       <div
  //         style={{
  //           backgroundColor: "#F0F8FF",
  //           height: "200px",
  //           width: "200px",
  //         }}
  //       >
  //         frosty white
  //       </div>
  //       <div
  //         style={{
  //           backgroundColor: "#C0C0d8",
  //           height: "200px",
  //           width: "200px",
  //         }}
  //       >
  //         silver gray
  //       </div>
  //     </Stack>
  //     <Stack direction="row">
  //       <div
  //         style={{
  //           backgroundColor: "#FFD1DC",
  //           height: "200px",
  //           width: "200px",
  //         }}
  //       >
  //         soft pink
  //       </div>
  //       <div
  //         style={{
  //           backgroundColor: "#faffcc",
  //           height: "200px",
  //           width: "200px",
  //         }}
  //       >
  //         soft yellow
  //       </div>
  //       <div
  //         style={{
  //           backgroundColor: "#D8BFD8",
  //           height: "200px",
  //           width: "200px",
  //         }}
  //       >
  //         dusty lavender
  //       </div>
  //     </Stack>
  //     <Stack direction="row">
  //       <div
  //         style={{
  //           backgroundColor: "#FFD700",
  //           height: "200px",
  //           width: "200px",
  //         }}
  //       >
  //         sunny yellow
  //       </div>
  //       <div
  //         style={{
  //           backgroundColor: "#40E0D0",
  //           height: "200px",
  //           width: "200px",
  //         }}
  //       >
  //         turquoise blue
  //       </div>
  //       <div
  //         style={{
  //           backgroundColor: "#FF6F61",
  //           height: "200px",
  //           width: "200px",
  //         }}
  //       >
  //         coral pink
  //       </div>
  //     </Stack>
  //   </>
  // );

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
          height: "100dvh",
          justifyContent: "center",
          paddingTop: 0,
          width: "100%",
        }}
      >
        {isLoading ? (
          <CircularProgress
            sx={{ color: isFall ? theme.palette.secondary.main : "#fff9" }}
          />
        ) : (
          <>
            <Typography
              sx={{ fontWeight: "700", letterSpacing: 2 }}
              variant="h4"
            >
              {fallString}
            </Typography>
          </>
        )}
      </Stack>
    </ThemeProvider>
  );
}
