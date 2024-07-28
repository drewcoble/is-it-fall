import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";

const FaqItem = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | string;
}) => {
  return (
    <React.Fragment>
      <Typography fontWeight={600} variant="body1">
        {title}
      </Typography>
      <Typography pl={3} variant="body2">
        {children}
      </Typography>
      <Divider />
    </React.Fragment>
  );
};

export default FaqItem;
