import useToggle from "@/hooks/useToggle";
import { ComponentWithChildren } from "@/types";
import React from "react";
import { Dropdown } from "./Dropdown";
import { AnimatePresence } from "framer-motion";
import { StlyedMenuButton } from "./menu.style";
export interface Menuprops extends ComponentWithChildren {
  options?: React.ReactNode;
  position: "right" | "left";
  color?: string;
}
export const Menu: React.FC<Menuprops> = ({
  children,
  options,
  position = "right",
}) => {
  const [value, toggle] = useToggle(false);
  return (
    <StlyedMenuButton onClick={toggle}>
      {children}
      <AnimatePresence>
        {value ? <Dropdown position={position}>{options}</Dropdown> : null}
      </AnimatePresence>
    </StlyedMenuButton>
  );
};
