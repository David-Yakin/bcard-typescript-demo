import React from "react";
import CardMedia from "@mui/material/CardMedia";
import ImageInterface from "../../interfaces/ImageInterface";

type CardHeadProps = {
  image: ImageInterface;
};

const CardHead = ({ image }: CardHeadProps) => {
  const { url, alt } = image;
  return <CardMedia component="img" image={url} height="194" alt={alt} />;
};

export default CardHead;
