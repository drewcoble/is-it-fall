import { AppBar, Stack, Typography } from "@mui/material";
import React from "react";
import MenuContent from "./MenuContent";

const Header = () => {
  return (
    <AppBar
      elevation={0}
      sx={{ justifyContent: "center", paddingX: 3, paddingY: 2 }}
    >
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <MenuContent />
        <Typography sx={{ letterSpacing: 2 }} variant="h5">
          isitfall.us
        </Typography>
      </Stack>
    </AppBar>
  );
};

export default Header;
