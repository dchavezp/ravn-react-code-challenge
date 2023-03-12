import { StyledActions, StyledTopNavigation } from "./top-navigation-bar.style";
import {
  RiSearchLine,
  RiNotification3Line,
  RiCloseCircleLine,
} from "react-icons/ri";
import { Avatar } from "../Avatar";
import { Input } from "../Input";

export const TopNavigationBar: React.FC = () => {
  return (
    <StyledTopNavigation>
      <RiSearchLine size={24} />
      <Input weight="normal" placeholder="Search" />
      <StyledActions>
        <RiCloseCircleLine size={24} />
        <RiNotification3Line size={24} />
        <Avatar
          sizeVariant="md"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=60"
          alt="avatar"
        />
      </StyledActions>
    </StyledTopNavigation>
  );
};
