import React from "react";
import { RiFunctionLine, RiMenuLine } from "react-icons/ri";
import { StyledButton, StyledSwitchContainer } from "./switch-button.style";
export interface SwitchButtonProps {
  isList?: boolean;
}
export const SwitchButton: React.FC<SwitchButtonProps> = ({
  isList = false,
}) => {
  return (
    <StyledSwitchContainer>
      <StyledButton isList={isList}>
        <RiMenuLine size={24} />
      </StyledButton>
      <StyledButton isList={!isList}>
        <RiFunctionLine size={24} />
      </StyledButton>
    </StyledSwitchContainer>
  );
};
