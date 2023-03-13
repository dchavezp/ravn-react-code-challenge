import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledError = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:${theme.colors.neutral[2]};
    & h1{
        color:${theme.colors.neutral[1]};
    }
`