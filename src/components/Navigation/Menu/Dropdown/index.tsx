import React from "react";
import { Menuprops } from "..";
import { StyledDropdown } from "./dropdown.style";
export const Dropdown: React.FC<Menuprops> = ({
  children,
  position,
  bottom,
  color,
}) => {
  return (
    <StyledDropdown
      animate={{ opacity: 1, y: 20 }}
      initial={{ opacity: 0.8, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      position={position}
      bottom={bottom}
      color={color}
    >
      {children}
    </StyledDropdown>
  );
};
