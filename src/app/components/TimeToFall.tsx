"use client";
import { useEffect, useState } from "react";
import useFall from "../hooks/useFall";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import FallTheme from "../themes/FallTheme";
import React from "react";

const SECONDS_MULTIPLIER = 1000;
const MINUTES_MULTIPLIER = SECONDS_MULTIPLIER * 60;
const HOURS_MULTIPLIER = MINUTES_MULTIPLIER * 60;
const DAYS_MULTIPLIER = HOURS_MULTIPLIER * 24;

const TimeToFall = () => {
  const { fallEnd, isFall, nextFallStart } = useFall();
  const theme = FallTheme();

  const [daysToTime, setDaysToTime] = useState<number>(0);
  const [hoursToTime, setHoursToTime] = useState<number>(0);
  const [minutesToTime, setMinutesToTime] = useState<number>(0);
  const [secondsToTime, setSecondsToTime] = useState<number>();
  const [msToTime, setMsToTime] = useState<number>();

  useEffect(() => {
    if (!isFall && msToTime === undefined && nextFallStart !== undefined) {
      setMsToTime(Math.ceil(nextFallStart - new Date().getTime()));
    } else if (msToTime === undefined && fallEnd !== undefined) {
      setMsToTime(Math.ceil(fallEnd - new Date().getTime()));
    } else if (msToTime !== undefined) {
      setTimeout(() => {
        setMsToTime(msToTime - 1000);
        setSecondsToTime(Math.floor(msToTime / SECONDS_MULTIPLIER));
        setMinutesToTime(Math.floor(msToTime / MINUTES_MULTIPLIER));
        setHoursToTime(Math.floor(msToTime / HOURS_MULTIPLIER));
        setDaysToTime(Math.floor(msToTime / DAYS_MULTIPLIER));
      }, 1000);
    }
  }, [fallEnd, isFall, msToTime, nextFallStart]);

  return (
    <Box
      sx={{
        alignItems: "center",
        background: "#ffffff05",
        justifyContent: "center",
        paddingX: 2,
        paddingY: 2,
        width: "100vw",
      }}
    >
      <Typography color="secondary" textAlign="center" variant="body1">
        Fall {isFall ? "ends" : "starts"} in:{" "}
        {secondsToTime !== undefined ? (
          <React.Fragment>
            {daysToTime}&nbsp;days {hoursToTime - daysToTime * 24}
            &nbsp;hours {minutesToTime - hoursToTime * 60}
            &nbsp;minutes {secondsToTime - minutesToTime * 60}
            &nbsp;seconds
          </React.Fragment>
        ) : (
          <CircularProgress
            size="1rem"
            sx={{ color: theme.palette.secondary.main }}
          />
        )}
      </Typography>
    </Box>
  );
};

export default TimeToFall;
