import { StyledButton } from "./button.style";

export interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
}
export const Button = ({ children, disabled = false }: ButtonProps) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};
