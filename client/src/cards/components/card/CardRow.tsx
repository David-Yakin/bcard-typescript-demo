import React from "react";
import Typography from "@mui/material/Typography";

type CardRowProps = {
  title: string;
  content: string;
};

const CardRow = ({ title, content }: CardRowProps) => {
  return (
    <Typography variant="body2" color="text.secondary">
      <Typography fontWeight={700} component="span">
        {title}:
      </Typography>
      {content}
    </Typography>
  );
};

export default CardRow;
