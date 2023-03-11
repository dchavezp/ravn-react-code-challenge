import {
  ActionsContainer,
  StyledContainer,
  StyledInput,
} from "./top-navigation-bar.style";
import {
  RiSearchLine,
  RiNotification3Line,
  RiCloseCircleLine,
} from "react-icons/ri";
import { Avatar } from "../Avatar";

export const TopNavigationBar: React.FC = () => {
  return (
    <StyledContainer>
      <RiSearchLine size={24} />
      <StyledInput placeholder="Search"></StyledInput>
      <ActionsContainer>
        <RiCloseCircleLine size={24} />
        <RiNotification3Line size={24} />
        <Avatar
          sizeVariant="md"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=60"
          alt="avatar"
        />
      </ActionsContainer>
    </StyledContainer>
  );
};
