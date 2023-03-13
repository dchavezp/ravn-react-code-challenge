import useModal from "@/hooks/useModal";
import { ComponentWithChildren } from "@/types";
import React from "react";
import { StyledModal } from "./modal.style";

export const Modal: React.FC<ComponentWithChildren> = ({ children }) => {
  const { showModal } = useModal();
  if (!showModal) {
    return null;
  }
  return <StyledModal>{children}</StyledModal>;
};
