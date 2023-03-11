import React from "react";
import { RiFunctionLine, RiMenuLine } from "react-icons/ri";
import {
  StyledCardsButton,
  StyledListButton,
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
      <StyledListButton isList={isList}>
        <RiMenuLine size={24} />
      </StyledListButton>
      <StyledCardsButton isList={!isList}>
        <RiFunctionLine size={24} />
      </StyledCardsButton>
    </StyledSwitchContainer>
  );
};
