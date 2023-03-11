import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledContainer = styled.div`
    max-width:232px;
    height:100%;
    background:${theme.colors.neutral[4]};
    border-radius:${theme.borderRadius.lg};
    display:flex;
    flex-direction: column;
    align-items:center;
    padding-top:12px;
    gap:8px;
`
