import React from "react";
import { StyledContainer } from "./sidevar-item.style";
interface SidebarItemProps {
  children?: React.ReactNode;
  selected: boolean;
}
export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  selected,
}) => {
  return <StyledContainer selected={selected}>{children}</StyledContainer>;
};
