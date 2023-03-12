import { ComponentWithChildren } from "@/types";
import React from "react";
import { StyledTag } from "./tag.style";

export interface TagProps extends ComponentWithChildren {
  backgroundColor?: "primary" | "secondary" | "tertiary" | "neutral";
  opacity?: number;
  variant?: "solid" | "outline";
}
export const Tag: React.FC<TagProps> = ({
  backgroundColor = "primary",
  opacity = 0.1,
  variant = "solid",
  children,
}) => {
  return (
    <StyledTag
      backgroundColor={backgroundColor}
      opacity={opacity}
      variant={variant}
    >
      {children}
    </StyledTag>
  );
};
