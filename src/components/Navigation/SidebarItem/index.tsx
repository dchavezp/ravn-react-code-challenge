import { ComponentWithChildren } from "@/types";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { StyledSidebarItem } from "./sidevar-item.style";
export interface SidebarItemProps extends ComponentWithChildren {
  selected?: boolean;
  redirectTo: string;
}
export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  redirectTo,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <StyledSidebarItem
      selected={location.pathname === redirectTo}
      onClick={() => {
        navigate(redirectTo);
      }}
    >
      {children}
    </StyledSidebarItem>
  );
};
