import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import {
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";
import {
  getSelectedHemisphere,
  setToNorthernHemipshere,
  setToSouthernHemipshere,
} from "../utilities/hemisphereUtilities";

const HemisphereToggle = () => {
  const selectedHemisphere = getSelectedHemisphere();
  const [hemisphere, setHemisphere] = useState(selectedHemisphere);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newHemisphere: string
  ) => {
    setHemisphere(newHemisphere);
    if (newHemisphere === "northern") {
      setToNorthernHemipshere();
    } else {
      setToSouthernHemipshere();
    }
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" gap={2}>
      <Typography color="secondary" fontSize="small">
        Set Hemisphere:
      </Typography>
      <ToggleButtonGroup
        value={hemisphere}
        onChange={handleChange}
        exclusive
        orientation="vertical"
        color="secondary"
      >
        <ToggleButton
          value="northern"
          key="n"
          size="small"
          sx={{
            height: 25,
            width: 50,
            borderRadius: "25px 25px 0px 0px",
          }}
        >
          <ArrowUpward fontSize="small" />
        </ToggleButton>
        <ToggleButton
          value="southern"
          key="s"
          size="small"
          sx={{
            height: 25,
            width: 50,
            borderRadius: "0px 0px 25px 25px",
          }}
        >
          <ArrowDownward fontSize="small" />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default HemisphereToggle;
