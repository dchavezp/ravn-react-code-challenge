import React from "react";
import { RiAddLine } from "react-icons/ri";
import { Button } from "../Button";
import { SwitchButton } from "../SwitchButton";
import { StyledTopBar } from "./top-bar.style";
interface TopBarProps {
  onClick?: () => void;
}
export const TopBar: React.FC<TopBarProps> = ({ onClick }) => {
  return (
    <StyledTopBar>
      <SwitchButton />
      <Button onClick={onClick}>
        <RiAddLine size={24} />
      </Button>
    </StyledTopBar>
  );
};
