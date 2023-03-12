import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledNotFound = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:16px;
    align-items:center;
    background-color:${theme.colors.neutral[5]};
    color:${theme.colors.neutral[2]};
    height: 100vh;
    & h1{
        margin:0;
        color:${theme.colors.neutral[1]};
        ${theme.typography.display.L}
    }
    & h3{
        margin:0;
        ${theme.typography.body.M}
    }
`