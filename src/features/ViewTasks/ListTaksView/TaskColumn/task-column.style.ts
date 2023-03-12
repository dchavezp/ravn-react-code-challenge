import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledTaskColumn = styled.div`
    position:relative;
    width: fit-content;
    display:flex;
    flex-direction:column;
    flex-shrink: 0;
    gap:16px;
    color:${theme.colors.neutral[1]};
    overflow-y:scroll;
    height:70vh;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
`
export const StyledHeaderTaskColumn = styled.div`
    position:sticky;
    top:0;
    padding-top:8x;
    padding-bottom:8px;
    z-index:2;
    background-color:${theme.colors.neutral[5]};
`