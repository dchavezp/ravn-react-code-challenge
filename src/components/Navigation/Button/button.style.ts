import { theme } from "@/theme/theme";
import styled from "styled-components";
import { ButtonProps } from ".";

export const StyledButton = styled.button<ButtonProps>`
    position: relative;
    cursor: pointer;
    display:inline-block;
    transition:all;
    transition-duration:300ms;
    border:0;
    background-color:${({ variant }) => variant === "primary" ? theme.colors.primary[4] : theme.colors.neutral[3]};
    border-radius:${theme.borderRadius.s};
    color:${theme.colors.neutral[1]};
    width:fit-content;
    height:40px;
    padding:8px;
    ${theme.typography.body.M}
    &:active{
        background-color:${({ variant }) => variant === "primary" ? theme.colors.primary[3] : theme.colors.neutral[4]};
    };
    &:hover{
        background-color:${({ variant }) => variant === "primary" ? theme.colors.primary[2] : theme.colors.neutral[2]};
    };
    &:disabled{
        background-color:${({ variant }) => variant === "primary" ? theme.colors.primary[2] : theme.colors.neutral[5]};
        color:${({ variant }) => variant === "primary" ? theme.colors.neutral[1] : theme.colors.neutral[2]};
    };
`;