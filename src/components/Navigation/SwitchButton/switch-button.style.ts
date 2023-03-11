import { theme } from "@/theme/theme";
import styled from "styled-components";
import { SwitchButtonProps } from ".";

export const StyledSwitchContainer = styled.div`
    display:flex;
    flex-direction:row;
`

export const StyledListButton = styled.button<SwitchButtonProps>`
    background-color:transparent;
    color:${({ isList }) => isList ? `${theme.colors.primary[4]}` : `${theme.colors.neutral[1]}`};
    border:${({ isList }) => isList ? `1px solid ${theme.colors.primary[4]}` : `0px`};
    border-radius:${theme.borderRadius.s};
`

export const StyledCardsButton = styled.button<SwitchButtonProps>`
    background-color:transparent;
    color:${({ isList }) => isList ? `${theme.colors.primary[4]}` : `${theme.colors.neutral[1]}`};
    border:${({ isList }) => isList ? `1px solid ${theme.colors.primary[4]}` : `0px`};
    border-radius:${theme.borderRadius.s};
`