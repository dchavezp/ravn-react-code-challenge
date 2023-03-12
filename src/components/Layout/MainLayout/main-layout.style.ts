import styled from "styled-components";
import { theme } from "@/theme/theme";
export const StyledMainLayout = styled.div`
    display:grid;
    grid-template-rows:repeat(1, 1fr);
    grid-template-columns:296px 1fr;
    width:fit-content;
    height: 100vh;
    width:100vw;
    background:${theme.colors.neutral[5]};
`;
export const StyledSideBar = styled.nav`
    padding-left:32px;
    padding-right:32px;
    padding-top:32px;
    padding-bottom:32px;
`;
export const StyledMain = styled.div`
    display:flex;
    flex-direction:column;
    gap:32px;
    padding-top:32px;
    padding-right:36px;
    width:75vw;
`;
