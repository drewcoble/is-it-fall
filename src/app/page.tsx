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
      <Header />
      {/* <Stack
        sx={{
          alignItems: "center",
          height: "100dvh",
          justifyContent: "flex-start",
          paddingTop: 0,
          width: "100%",
        }}
      >
        <Adsense
          className="ExampleAdSlot"
          client="ca-pub-7669051272217779"
          slot=""
        /> */}
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
              <Button
                href="https://venmo.com/isitfall?txn=pay&audience=public&amount=6.50&note=pumpkin%20spice%20latte%20%E2%98%95%EF%B8%8F"
                color="secondary"
                variant="outlined"
              >
                Buy me a Pumpkin Spice Latte&nbsp;&nbsp;☕️
              </Button>
              <TimeToFall />
            </Stack>
          </>
        )}
      </Stack>
      {/* </Stack> */}
    </ThemeProvider>
  );
}
