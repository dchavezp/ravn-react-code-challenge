import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    display:inline-block;
    transition:all;
    transition-duration:300ms;
    border:0;
    background-color:${theme.colors.primary[4]};
    border-radius:${theme.borderRadius.s};
    color:${theme.colors.neutral[1]};
    width:fit-content;
    height:40px;
    padding:8px;
    ${theme.typography.body.M}
    &:active{
        background-color:${theme.colors.primary[3]};
    };
    &:hover{
        background-color:${theme.colors.primary[2]}
    };
    &:disabled{
        background-color:${theme.colors.primary[2]}
    };
`