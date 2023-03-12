import { ComponentWithChildren } from "@/types";
import { StyledButton } from "./button.style";

export interface ButtonProps extends ComponentWithChildren {
  disabled?: boolean;
}
export const Button = ({ children, disabled = false }: ButtonProps) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};
