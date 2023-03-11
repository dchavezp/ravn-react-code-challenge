import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledContainer = styled.div`
    background-color:${theme.colors.neutral[4]};
    border-radius:${theme.borderRadius.md};
    display:flex;
    padding-left:24px;
    padding-right:24px;
    padding-top:12px;
    padding-bottom:12px;
    flex-direction:row;
    align-items:center;
    color:${theme.colors.neutral[2]};
`

export const ActionsContainer = styled.div`
    display:flex;
    gap:24px;
    flex-direction:row;
    align-items:center;
`

export const StyledInput = styled.input`
    background: transparent;
    border:0;
    width:100%;
    padding-left:24px;
    padding-right:24px;
    color:${theme.colors.neutral[2]};
    caret-color:${theme.colors.neutral[2]};
    &::placeholder{
        transition:all;
        transition-duration:300ms;
        color:${theme.colors.neutral[2]};
        ${theme.typography.body.M}
    };
    &:active, &:focus{
        outline:none;
        &::placeholder{
            opacity:0;
        }
    };
`