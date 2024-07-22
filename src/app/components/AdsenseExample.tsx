import React from "react";
import { Adsense } from "@ctrl/react-adsense";
import "../../css/AdsenseStylesheet.css";
import { Box } from "@mui/material";

function AdsenseExample() {
  //console.log("Ads Shown")
  return (
    <Adsense
      className="ExampleAdSlot"
      client="ca-pub-7669051272217779"
      slot="442287"
    />
  );
}

export default AdsenseExample;
