import React from "react";
import { RiAddLine } from "react-icons/ri";
import { Button } from "../Button";
import { SwitchButton } from "../SwitchButton";
import { StyledTopBar } from "./top-bar.style";

export const TopBar = () => {
  return (
    <StyledTopBar>
      <SwitchButton />
      <Button>
        <RiAddLine size={24} />
      </Button>
    </StyledTopBar>
  );
};
