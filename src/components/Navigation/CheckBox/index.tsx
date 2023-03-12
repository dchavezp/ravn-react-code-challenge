import React from "react";
import { StyledCheckbox, StyledCheckboxContainer } from "./checkbox.style";
import { RiCheckboxBlankLine, RiCheckboxLine } from "react-icons/ri";
interface CheckBoxProps {
  label?: string;
  active?: boolean;
}
export const CheckBox: React.FC<CheckBoxProps> = ({ label, active }) => {
  return (
    <StyledCheckboxContainer>
      <StyledCheckbox>
        {active ? (
          <RiCheckboxBlankLine size={24} />
        ) : (
          <RiCheckboxLine size={24} />
        )}
      </StyledCheckbox>
      {label}
    </StyledCheckboxContainer>
  );
};
