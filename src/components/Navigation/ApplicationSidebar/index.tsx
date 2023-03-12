import { StyledApplicationSidebar } from "./application-sidevar.style";
import { ComponentWithChildren } from "@/types";
export const ApplicationSidebar: React.FC<ComponentWithChildren> = ({
  children,
}) => {
  return <StyledApplicationSidebar>{children}</StyledApplicationSidebar>;
};
