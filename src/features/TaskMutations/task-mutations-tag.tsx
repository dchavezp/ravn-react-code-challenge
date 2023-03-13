import { Menu } from "@/components";
import { theme } from "@/theme/theme";
import { ComponentWithChildren } from "@/types";
import React from "react";
interface TaskMutationTagProps extends ComponentWithChildren {
  options?: React.ReactNode;
}
export const TaskMutationTag: React.FC<TaskMutationTagProps> = ({
  options,
  children,
}) => {
  return (
    <Menu
      position="right"
      options={options}
      bottom="-168px"
      color={theme.colors.neutral[1]}
    >
      {children}
    </Menu>
  );
};
