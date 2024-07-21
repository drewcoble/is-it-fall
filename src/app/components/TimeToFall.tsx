"use client";
import { useEffect, useState } from "react";
import useFall from "../hooks/useFall";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import FallTheme from "../themes/FallTheme";

const SECONDS_MULTIPLIER = 1000;
const MINUTES_MULTIPLIER = SECONDS_MULTIPLIER * 60;
const HOURS_MULTIPLIER = MINUTES_MULTIPLIER * 60;
const DAYS_MULTIPLIER = HOURS_MULTIPLIER * 24;

const TimeToFall = () => {
  const { isFall, nextFallStart } = useFall();
  const theme = FallTheme();

  const [daysToFall, setDaysToFall] = useState<number>(0);
  const [hoursToFall, setHoursToFall] = useState<number>(0);
  const [minutesToFall, setMinutesToFall] = useState<number>(0);
  const [secondsToFall, setSecondsToFall] = useState<number>();
  const [msToFall, setMsToFall] = useState<number>();

  useEffect(() => {
    if (msToFall === undefined && nextFallStart !== undefined) {
      setMsToFall(Math.ceil(nextFallStart - new Date().getTime()));
    } else if (msToFall !== undefined) {
      setTimeout(() => {
        setMsToFall(msToFall - 1000);
        setSecondsToFall(Math.floor(msToFall / SECONDS_MULTIPLIER));
        setMinutesToFall(Math.floor(msToFall / MINUTES_MULTIPLIER));
        setHoursToFall(Math.floor(msToFall / HOURS_MULTIPLIER));
        setDaysToFall(Math.floor(msToFall / DAYS_MULTIPLIER));
      }, 1000);
    }
  }, [msToFall, nextFallStart]);

  return (
    <Box
      sx={{
        alignItems: "center",
        background: "#ffffff05",
        bottom: 0,
        justifyContent: "center",
        paddingY: 3,
        position: "fixed",
        width: "100vw",
      }}
    >
      {isFall ? (
        <Typography variant="h5">It&apos;s fall y&apos;all</Typography>
      ) : (
        <Typography textAlign="center" variant="h5">
          Fall starts in:{" "}
          {secondsToFall !== undefined ? (
            <>
              {daysToFall}&nbsp;days {hoursToFall - daysToFall * 24}
              &nbsp;hours {minutesToFall - hoursToFall * 60}
              &nbsp;minutes {secondsToFall - minutesToFall * 60}
              &nbsp;seconds
            </>
          ) : (
            <CircularProgress
              size="1.25rem"
              sx={{ color: theme.palette.secondary.main }}
            />
          )}
        </Typography>
      )}
    </Box>
  );
};

export default TimeToFall;
