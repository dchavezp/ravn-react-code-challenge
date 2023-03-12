import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledCard = styled.div`
    width:348px;
    background-color:${theme.colors.neutral[4]};
    border-radius:${theme.borderRadius.s};
    padding:16px;
    display:flex;
    flex-direction:column;
    color:${theme.colors.neutral[1]};
    gap:16px;
    z-index:0;
`
export const StyledCardRow = styled.div`
    display:flex;
    flex-direction:row;
    height:32px;
    justify-content:space-between;
    align-items:center;
`
export const StyledTagsRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:8px;
`
export const StyledReactionsList = styled.div`
    display:flex;
    flex-direction:row;
    gap:8px;
    align-items:center;
`
export const StyledReaction = styled.div`
    display:flex;
    flex-direction:row;
    gap:4px;
`