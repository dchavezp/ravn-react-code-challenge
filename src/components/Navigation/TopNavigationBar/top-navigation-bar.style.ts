import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledTopNavigation = styled.div`
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
`;

export const StyledActions = styled.div`
    display:flex;
    gap:24px;
    flex-direction:row;
    align-items:center;
`;
