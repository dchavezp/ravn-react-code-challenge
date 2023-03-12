import { DropdownOption } from "@/components";
import { theme } from "@/theme/theme";
import { RiPencilLine, RiDeleteBin6Line } from "react-icons/ri";
import React from "react";

export const CardOptions = () => {
  return (
    <>
      <DropdownOption color={theme.colors.neutral[1]}>
        <RiPencilLine size={24} />
        Edit
      </DropdownOption>
      <DropdownOption color={theme.colors.neutral[1]}>
        <RiDeleteBin6Line size={24} />
        Delete
      </DropdownOption>
    </>
  );
};
