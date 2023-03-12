import React from "react";
import { RiFunctionLine, RiMenuLine } from "react-icons/ri";
import {
  StyledSwitchButton,
  StyledSwitchContainer,
} from "./switch-button.style";
export interface SwitchButtonProps {
  isList?: boolean;
}
export const SwitchButton: React.FC<SwitchButtonProps> = ({
  isList = false,
}) => {
  return (
    <StyledSwitchContainer>
      <StyledSwitchButton isList={isList}>
        <RiMenuLine size={24} />
      </StyledSwitchButton>
      <StyledSwitchButton isList={!isList}>
        <RiFunctionLine size={24} />
      </StyledSwitchButton>
    </StyledSwitchContainer>
  );
};
