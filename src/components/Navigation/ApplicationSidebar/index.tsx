import Logo from "@/assets/ravn-logo";
import { SidebarItem } from "@/components/Navigation";
import { StyledContainer } from "./application-sidevar.style";
import { RiMenuLine, RiFunctionLine } from "react-icons/ri";
export const ApplicationSidebar = () => {
  return (
    <StyledContainer>
      <Logo style={{ marginBottom: "44px" }} />
      <SidebarItem selected={true}>
        <RiFunctionLine size={18} />
        dashboard
      </SidebarItem>
      <SidebarItem selected={false}>
        <RiMenuLine size={18} />
        task
      </SidebarItem>
    </StyledContainer>
  );
};
