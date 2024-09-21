"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";
import MainPageWrapper from "../components/MainPageWrapper";
import FaqItem from "./FaqItem";
import useFall from "../hooks/useFall";

export default function Info() {
  const { isFall } = useFall();
  return (
    <MainPageWrapper>
      <Stack spacing={1}>
        <Typography textAlign="center" variant="h5">
          FAQs
        </Typography>
        <br />
        <FaqItem title="Is it fall?">{isFall ? "Yes." : "No."}</FaqItem>
        <FaqItem title="When does fall start?">
          <React.Fragment>
            Fall has a different starting date/time every year.
            <br />
            Lucky for you, <strong>isitfall.us</strong> will let you know when
            it is fall, down to the minute.
          </React.Fragment>
        </FaqItem>
      </Stack>
    </MainPageWrapper>
  );
}
