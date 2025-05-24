"use client";
import React, { useMemo } from "react";
import { Stack, Typography } from "@mui/material";
import FaqItem from "./FaqItem";
import { getFall } from "../utilities/fallUtilities";

export default function Faqs() {
  const { isFall } = useMemo(() => getFall(new Date()), []);
  const fallString = useMemo(() => (isFall ? "YES" : "NO"), [isFall]);

  return (
    <Stack spacing={1}>
      <Typography textAlign="center" variant="h5">
        FAQs
      </Typography>
      <br />
      <FaqItem title="Is it fall?">{fallString}</FaqItem>
      <FaqItem title="When does fall start?">
        <React.Fragment>
          Fall has a different starting date/time every year.
          <br />
          Lucky for you, <strong>isitfall.us</strong> will let you know when it
          is fall, down to the minute.
        </React.Fragment>
      </FaqItem>
    </Stack>
  );
}
