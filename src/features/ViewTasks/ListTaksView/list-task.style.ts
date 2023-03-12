import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledListTask = styled.div`
    width:100%;
    display:flex;
    flex-wrap:nowrap;
    flex-direction:row;
    gap:32px;
    overflow-x:scroll;
    flex-basis: content;
    padding-bottom:8px;
    ::-webkit-scrollbar {
        margin-top:8px;
        width: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        padding-top:8px;
        background: ${theme.colors.neutral[2]};
        border-radius: 16px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${theme.colors.neutral[3]};
        box-shadow: inset 0 0 5px ${theme.colors.neutral[3]};
        border-radius: 16px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.neutral[4]};
    }
`