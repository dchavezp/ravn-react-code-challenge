import styled from "styled-components"
import { theme } from "@/theme/theme"
export const StyledContainer = styled.div`
    display:grid;
    grid-template-rows:repeat(1, 1fr);
    grid-template-columns:296px 1fr;
    width:fit-content;
    height: 100vh;
    width:100vw;
    background:${theme.colors.neutral[5]};
`
export const StyledSideBarContainer = styled.nav`
    padding-left:32px;
    padding-right:32px;
    padding-top:32px;
    padding-bottom:32px;
`
export const StyledLayoutActionsContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-top:4px;
    padding-bottom:4px;
`

export const StyledMainContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:32px;
    padding-top:32px;
    padding-right:36px;
    width:1108px;
`
