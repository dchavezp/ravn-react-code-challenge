import React from "react";
import { StyledImage } from "./avatar.style";
interface AvatarProps extends React.ComponentProps<"img"> {
  sizeVariant: "s" | "md" | "lg";
}
export const Avatar: React.FC<AvatarProps> = ({
  sizeVariant = "md",
  src,
  alt,
}) => {
  return (
    <StyledImage sizeVariant={sizeVariant} src={src} alt={alt}></StyledImage>
  );
};
