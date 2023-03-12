import { ComponentWithChildren } from "@/types";
import React from "react";
import { StyledHeaderTaskColumn, StyledTaskColumn } from "./task-column.style";
interface TaskColumnProps extends ComponentWithChildren {
  label?: string;
}
export const TaskColumn: React.FC<TaskColumnProps> = ({ label, children }) => {
  return (
    <StyledTaskColumn>
      <StyledHeaderTaskColumn>{label}</StyledHeaderTaskColumn>
      {children}
    </StyledTaskColumn>
  );
};
