import React from "react";
import { StyledAvatarContainer, StyledAvatar } from "./avatar.style";
interface AvatarProps extends React.ComponentProps<"img"> {
  sizeVariant: "s" | "md" | "lg";
  label?: string;
}
export const Avatar: React.FC<AvatarProps> = ({
  sizeVariant = "md",
  src = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=60",
  alt,
  label,
}) => {
  return (
    <StyledAvatarContainer>
      <StyledAvatar sizeVariant={sizeVariant} src={src} alt={alt} />
      {label}
    </StyledAvatarContainer>
  );
};
