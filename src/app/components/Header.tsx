import {
  AppBar,
  Stack,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FallTheme from "../themes/FallTheme";
import { useState } from "react";

const Header = () => {
  const theme = FallTheme();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <AppBar
      elevation={0}
      sx={{ justifyContent: "center", paddingX: 3, paddingY: 2 }}
    >
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <IconButton color="secondary" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon />
        </IconButton>
        <Typography sx={{ letterSpacing: 2 }} variant="h5">
          isitfall.us
        </Typography>
      </Stack>
    </AppBar>
  );
};

export default Header;
