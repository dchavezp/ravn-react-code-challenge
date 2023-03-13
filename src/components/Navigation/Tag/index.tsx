import { ComponentWithChildren } from "@/types";
import React from "react";
import { StyledTag } from "./tag.style";

export interface TagProps extends ComponentWithChildren {
  backgroundColor?: "primary" | "secondary" | "tertiary" | "neutral";
  opacity?: number;
  variant?: "solid" | "outline";
  onClick?: () => void;
}
export const Tag: React.FC<TagProps> = ({
  backgroundColor = "primary",
  opacity = 0.1,
  variant = "solid",
  children,
  onClick,
}) => {
  return (
    <StyledTag
      backgroundColor={backgroundColor}
      opacity={opacity}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </StyledTag>
  );
};
