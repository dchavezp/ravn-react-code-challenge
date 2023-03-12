import Logo from "@/assets/ravn-logo";
import { ApplicationSidebar, SidebarItem } from "@/components/Navigation";
import {
  StyledMainLayout,
  StyledMain,
  StyledSideBar,
} from "./main-layout.style";
import { Outlet } from "react-router-dom";
import { routes } from "@/routes/routes";
import { AnimatePresence } from "framer-motion";

export const MainLayout: React.FC = () => {
  return (
    <StyledMainLayout>
      <StyledSideBar>
        <ApplicationSidebar>
          <Logo style={{ marginBottom: "44px" }} />
          {routes.map((route) => {
            return (
              <SidebarItem key={route.path} redirectTo={route.path}>
                {route.icon}
                {route.name}
              </SidebarItem>
            );
          })}
        </ApplicationSidebar>
      </StyledSideBar>
      <StyledMain>
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </StyledMain>
    </StyledMainLayout>
  );
};
