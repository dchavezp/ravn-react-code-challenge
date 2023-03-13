import { theme } from "@/theme/theme";
import styled from "styled-components";
import { InputProps } from ".";

export const StyledInput = styled.input<InputProps>`
    background: transparent;
    border:0;
    width:100%;
    color:${theme.colors.neutral[2]};
    caret-color:${theme.colors.neutral[2]};
    &::placeholder{
        transition:all;
        transition-duration:300ms;
        color:${theme.colors.neutral[2]};
        font-weight:${(props) => props.weight};
        ${theme.typography.body.M}
    };
    &:active, &:focus{
        outline:none;
        &::placeholder{
            opacity:0;
        }
    };
`