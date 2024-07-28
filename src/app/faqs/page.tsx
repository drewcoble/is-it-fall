"use client";
import React from "react";
import {
  Box,
  CssBaseline,
  Divider,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Header from "../components/Header";
import FallTheme from "../themes/FallTheme";
import MainPageWrapper from "../components/MainPageWrapper";
import FaqItem from "./FaqItem";

export default function Info() {
  const theme = FallTheme();
  return (
    <MainPageWrapper>
      <Stack spacing={1}>
        <Typography textAlign="center" variant="h5">
          FAQs
        </Typography>
        <br />

        <FaqItem title="When does fall start?">
          <React.Fragment>
            Fall has a different starting date/time every year.
            <br />
            Lucky for you, <strong>isitfall.us</strong> will let you know when
            it is fall, down to the minute.
          </React.Fragment>
        </FaqItem>
        {/* <FaqItem title="Item #2">This is FAQ Item #2.</FaqItem> */}
      </Stack>
    </MainPageWrapper>
  );
}
