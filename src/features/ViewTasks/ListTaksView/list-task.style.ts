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
    & i{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding-top:40px;
        padding-bottom:40px;
        color:${theme.colors.neutral[1]}
    }
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

export const StyledSkeletonColumn = styled.div`
    position:relative;
    width: fit-content;
    display:flex;
    flex-direction:column;
    flex-shrink: 0;
    gap:16px;
    background-color:${theme.colors.neutral[3]};
    height:60vh;
    border-radius:16px;
    padding:16px;
    opacity:1;
`
export const StyledSkeletonCard = styled.div`
    width:348px;
    height:208px;
    display:flex;
    background-color:${theme.colors.neutral[4]};
    opacity:1;
    border-radius:${theme.borderRadius.s};
    animation: 3s cubic-bezier(.25, 1, .30, 1) fade infinite;
    @keyframes fade {
        0% {
            opacity:1;
        }
        50% {
            opacity:0.5;
        }
        100% {
            opacity:1;
        }
    }
`
export const StyledNoData = styled.div`
    color:${theme.colors.neutral[2]}
`