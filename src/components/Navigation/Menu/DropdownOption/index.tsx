import { ComponentWithChildren } from "@/types";
import React from "react";
import { StyledDropdownOption } from "./dropdown-option.style";
export interface DropdownOptionProps extends ComponentWithChildren {
  action?: () => void;
  color?: string;
}
export const DropdownOption: React.FC<DropdownOptionProps> = ({
  children,
  action,
  color,
}) => {
  return (
    <StyledDropdownOption onClick={action} color={color}>
      {children}
    </StyledDropdownOption>
  );
};
