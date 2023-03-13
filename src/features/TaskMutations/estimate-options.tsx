import { DropdownOption } from "@/components";
import { theme } from "@/theme/theme";
import { RiIncreaseDecreaseFill } from "react-icons/ri";

export const EstimateOptions = () => {
  return (
    <>
      <DropdownOption color={theme.colors.neutral[1]}>
        <RiIncreaseDecreaseFill size={24} /> 0 Points
      </DropdownOption>
      <DropdownOption color={theme.colors.neutral[1]}>
        <RiIncreaseDecreaseFill size={24} /> 1 Points
      </DropdownOption>
      <DropdownOption color={theme.colors.neutral[1]}>
        <RiIncreaseDecreaseFill size={24} /> 2 Points
      </DropdownOption>
      <DropdownOption color={theme.colors.neutral[1]}>
        <RiIncreaseDecreaseFill size={24} /> 4 Points
      </DropdownOption>
      <DropdownOption color={theme.colors.neutral[1]}>
        <RiIncreaseDecreaseFill size={24} /> 8 Points
      </DropdownOption>
    </>
  );
};
