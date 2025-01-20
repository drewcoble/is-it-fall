"use client";
import React from "react";
import { Box, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import BuyMeALatte from "../components/BuyMeALatte";

export default function Supporters() {
  const theme = useTheme();
  return (
    <Stack alignItems="center" spacing={1} justifyContent="space-between">
      <Typography textAlign="center" variant="h5">
        Thank you to all our supporters!
      </Typography>
      <br />
      <Grid
        container
        flexDirection="column"
        gap={1}
        justifyContent="center"
        maxWidth="500px"
        width="100%"
      >
        <Grid item paddingLeft={2}>
          <Typography fontSize="16.5px">☕️☕️ Trey Jones </Typography>
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item paddingLeft={2}>
          <Typography fontSize="10px">☕️ Mariah Coble</Typography>
          <Typography fontSize="10px">☕️ Mallory Meyer</Typography>
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item paddingLeft={2}>
          <Typography fontSize="6px">· Tyler Giffel</Typography>
        </Grid>
      </Grid>
      <Box
        alignItems="center"
        bottom="0"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={1}
        left="0"
        px={4}
        py={2}
        position="fixed"
        sx={{
          background: `${theme.palette.secondary.main}11`,
        }}
        width="100%"
      >
        <Typography
          color="burlywood"
          fontSize="0.75rem"
          textAlign="center"
          variant="body2"
        >
          To get your name on the supporters page, you can support{" "}
          <strong>Is&nbsp;It&nbsp;Fall</strong> here:
        </Typography>
        <BuyMeALatte />
        <Typography
          color="burlywood"
          fontSize={"0.5rem"}
          textAlign="center"
          variant="body2"
        >
          * Supporter names are sized based on the donation amount.
          <br />
          10px for $6.50, plus an additional 1px/dollar.
        </Typography>
      </Box>
    </Stack>
  );
}
