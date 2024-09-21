"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import MainPageWrapper from "../components/MainPageWrapper";
import BuyMeALatte from "../components/BuyMeALatte";

export default function Info() {
  return (
    <MainPageWrapper>
      <Stack spacing={1} justifyContent="space-between">
        <Typography textAlign="center" variant="h5">
          Thank you to all our supporters!
        </Typography>
        <br />
        <Box alignItems="center" display="flex" gap={1} justifyContent="center">
          <Typography fontSize="1px">· Tyler Giffel</Typography>
          <Typography fontSize="10px">☕️ Mariah Coble</Typography>
          <Typography fontSize="10px">☕️ Mallory Meyer</Typography>
        </Box>
        <Box
          alignItems="center"
          bottom="0"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={1}
          left="0"
          pb={2}
          px={4}
          position="fixed"
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
    </MainPageWrapper>
  );
}
