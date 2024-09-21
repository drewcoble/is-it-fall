import {
  Drawer,
  Stack,
  Link,
  Grid,
  Typography,
  Divider,
  Box,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import BuyMeALatte from "./BuyMeALatte";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FallTheme from "../themes/FallTheme";

const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "FAQs",
    route: "/faqs",
  },
  {
    name: "Supporters",
    route: "/supporters",
  },
];

const MenuContent = () => {
  const theme = FallTheme();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <IconButton color="secondary" onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{
            background: theme.palette.primary.main,
            height: "100dvh",
            minWidth: "250px",
            paddingY: 3,
          }}
        >
          <Grid container direction="column">
            <Grid item px={2}>
              <Typography sx={{ letterSpacing: 2 }} variant="h5">
                isitfall.us
              </Typography>
            </Grid>
            <Grid item>
              <Divider sx={{ mb: 3, mt: 1 }} />
            </Grid>
            {links.map((link) => (
              <Grid item key={link.route} my={1}>
                <Link href={link.route} underline="none">
                  <Box px={2} py={1} width="100%">
                    {link.name}
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Box px={2}>
            <BuyMeALatte />
          </Box>
        </Stack>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuContent;
