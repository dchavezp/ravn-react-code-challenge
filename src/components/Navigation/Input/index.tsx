import React from "react";
import { StyledInput } from "./input.style";
export interface InputProps extends React.ComponentProps<"input"> {
  placeholder?: string;
  weight: "normal" | "bold";
}
export const Input: React.FC<InputProps> = ({
  placeholder,
  weight,
  onChange,
  value,
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      weight={weight}
      onChange={onChange}
      value={value}
    />
  );
};
