import React from "react";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

type PageHeaderProps = { title: string; subtitle: string };

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography variant="h5" component="h2">
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default PageHeader;
