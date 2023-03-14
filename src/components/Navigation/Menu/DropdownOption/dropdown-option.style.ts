import { theme } from "@/theme/theme";
import styled from "styled-components";
import { DropdownOptionProps } from ".";

export const StyledDropdownOption = styled.button<DropdownOptionProps>`
    cursor: pointer;
    min-width:190px;
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:8px;
    padding-left:16px;
    padding-right:16px;
    background-color:transparent;
    border:0;
    transition:all;
    transition-duration:300ms;
    ${theme.typography.body.M}
    color:${(props) => props.color ?? theme.colors.neutral[2]};
    &:hover{
        color:${theme.colors.primary[4]}
    }
`