import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledSettings = styled.div`
    color:${theme.colors.neutral[1]};
    height:calc(100vh - 56px);
    border-radius:${theme.borderRadius.lg};
    background-color:${theme.colors.neutral[4]};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:24px;
    & h1{
        color:${theme.colors.neutral[2]}
    }
    & .profile{
        background-color:${theme.colors.neutral[3]};
        padding:16px 24px 16px 24px;
        border-radius:${theme.borderRadius.s};
        display:flex;
        flex-direction:column;
        gap:2px;
        ${theme.typography.body.M}
        font-weight:lighter;
    }
`