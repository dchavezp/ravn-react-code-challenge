import React from "react";
import { StyledInput } from "./input.style";
export interface InputProps {
  placeholder?: string;
  weight: "normal" | "bold";
}
export const Input: React.FC<InputProps> = ({ placeholder, weight }) => {
  return <StyledInput placeholder={placeholder} weight={weight} />;
};
