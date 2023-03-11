import { ApplicationSidebar, TopNavigationBar } from "@/components/Navigation";
import { Button } from "@/components/Navigation/Button";
import { SwitchButton } from "@/components/Navigation/SwitchButton";

import { RiAddLine } from "react-icons/ri";
import {
  StyledContainer,
  StyledLayoutActionsContainer,
  StyledMainContainer,
  StyledSideBarContainer,
} from "./main-layout.style";

export const MainLayout: React.FC = () => {
  return (
    <StyledContainer>
      <StyledSideBarContainer>
        <ApplicationSidebar />
      </StyledSideBarContainer>
      <StyledMainContainer>
        <TopNavigationBar />
        <StyledLayoutActionsContainer>
          <SwitchButton />
          <Button>
            <RiAddLine size={24} />
          </Button>
        </StyledLayoutActionsContainer>
      </StyledMainContainer>
    </StyledContainer>
  );
};
