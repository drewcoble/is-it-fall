"use client";
import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import FaqItem from "./FaqItem";
import { FallContext } from "../contexts/fallContext";
import TimeToFall from "../components/TimeToFall";

export default function Faqs() {
  const { isFall } = useContext(FallContext);
  const fallString = isFall ? "Yes." : "No.";

  return (
    <>
      <Stack spacing={1}>
        <Typography textAlign="center" variant="h5">
          FAQs
        </Typography>
        <br />
        <FaqItem title="Is it fall?">
          {isFall === undefined ? "..." : fallString}
        </FaqItem>
        <FaqItem title="When does fall start?">
          <React.Fragment>
            Fall has a different starting date/time every year.
            <br />
            Lucky for you, <strong>isitfall?</strong> will let you know when it
            is fall, down to the minute.
          </React.Fragment>
        </FaqItem>
      </Stack>
      <TimeToFall hidden />
    </>
  );
}
