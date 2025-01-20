"use client";
import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import FallTheme from "../themes/FallTheme";
import React from "react";
import { FallContext } from "../contexts/fallContext";
import Grid from "@mui/material/Grid";
import { getFall } from "../utilities/fallUtilities";

const SECONDS_MULTIPLIER = 1000;
const MINUTES_MULTIPLIER = SECONDS_MULTIPLIER * 60;
const HOURS_MULTIPLIER = MINUTES_MULTIPLIER * 60;
const DAYS_MULTIPLIER = HOURS_MULTIPLIER * 24;

const TimeToFall = () => {
  const { isFall, setIsFall } = useContext(FallContext);
  const theme = FallTheme();

  const [seasonChange, setSeasonChange] = useState<boolean>(false);
  const [timeOfLoad, setTimeOfLoad] = useState(new Date().getTime());
  const [msSinceLoad, setMsSinceLoad] = useState<number>(0);
  const [nextTime, setNextTime] = useState<number>(0);

  const msToTime = nextTime - timeOfLoad;
  const updatedMsToTime = msToTime - msSinceLoad;

  const daysToTime = Math.floor(updatedMsToTime / DAYS_MULTIPLIER);
  const daysInMs = daysToTime * DAYS_MULTIPLIER;

  const hoursToTime = Math.floor(
    (updatedMsToTime - daysInMs) / HOURS_MULTIPLIER
  );
  const hoursInMs = daysInMs + hoursToTime * HOURS_MULTIPLIER;

  const minutesToTime = Math.floor(
    (updatedMsToTime - hoursInMs) / MINUTES_MULTIPLIER
  );
  const minutesInMs = hoursInMs + minutesToTime * MINUTES_MULTIPLIER;

  const secondsToTime = Math.floor(
    (updatedMsToTime - minutesInMs) / SECONDS_MULTIPLIER
  );

  useEffect(() => {
    const { fallEnd, isFall, nextFallStart } = getFall(new Date());
    setIsFall?.(isFall);
    setNextTime(isFall ? fallEnd : nextFallStart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seasonChange]);

  useEffect(() => {
    setTimeout(() => {
      if (nextTime !== 0 && timeOfLoad + msSinceLoad >= nextTime) {
        setTimeOfLoad(0);
        setMsSinceLoad(0);
        setSeasonChange(!seasonChange);
      } else {
        setMsSinceLoad(msSinceLoad + 1000);
      }
    }, 1000);
  }, [msSinceLoad]);

  return (
    <Box
      sx={{
        alignItems: "center",
        background: `${theme.palette.secondary.main}11`,
        bottom: 0,
        justifyContent: "center",
        minHeight: 56,
        paddingX: 2,
        paddingY: 2,
        position: "fixed",
        width: "100vw",
      }}
    >
      <Grid alignItems="center" container gap={0.75} justifyContent="center">
        {isFall === undefined ? (
          <CircularProgress
            size="1.2rem"
            sx={{ color: theme.palette.secondary.main }}
          />
        ) : (
          <React.Fragment>
            <Grid item sm="auto" xs={12}>
              <Typography color="secondary" textAlign="center" variant="body1">
                &nbsp;Fall {isFall ? "ends" : "starts"} in:&nbsp;&nbsp;
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Typography color="secondary" textAlign="center" variant="body1">
                {daysToTime}&nbsp;days&nbsp;
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Typography color="secondary" textAlign="center" variant="body1">
                {hoursToTime}&nbsp;hours&nbsp;
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Typography color="secondary" textAlign="center" variant="body1">
                {minutesToTime}&nbsp;minutes&nbsp;
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Typography color="secondary" textAlign="center" variant="body1">
                {secondsToTime}&nbsp;seconds
              </Typography>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    </Box>
  );
};

export default TimeToFall;
