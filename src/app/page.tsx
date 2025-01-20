"use client";
import { CircularProgress, Stack, Typography } from "@mui/material";
import FallTheme from "./themes/FallTheme";
import TimeToFall from "./components/TimeToFall";
import "../css/AdsenseStylesheet.css";
import React, { useContext } from "react";
import { FallContext } from "./contexts/fallContext";

export default function Home() {
  const { isFall } = useContext(FallContext);
  const theme = FallTheme();
  const fallString = isFall ? "YES" : "NO";

  return (
    <Stack
      height="100%"
      width="100%"
      sx={{ alignItems: "center", justifyContent: "center", paddingTop: 0 }}
    >
      {isFall === undefined ? (
        <CircularProgress sx={{ color: theme.palette.secondary.main }} />
      ) : (
        <React.Fragment>
          <Typography sx={{ fontWeight: "700", letterSpacing: 2 }} variant="h4">
            {fallString}
          </Typography>
        </React.Fragment>
      )}
      <TimeToFall />
    </Stack>
  );
}
