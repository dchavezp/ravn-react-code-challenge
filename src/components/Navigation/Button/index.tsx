import { ComponentWithChildren } from "@/types";
import { StyledButton } from "./button.style";

export interface ButtonProps extends ComponentWithChildren {
  disabled?: boolean;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}
export const Button = ({
  children,
  disabled = false,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
