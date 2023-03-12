import { theme } from "@/theme/theme";
import styled from "styled-components";
export const StlyedMenuButton = styled.span`
    cursor: pointer;
    width:fit-content;
    padding:0;
    background:transparent;
    border:0;
    position:relative;
    display:flex;
    align-items:center;
    color:${theme.colors.neutral[2]};
    z-index:1;
`