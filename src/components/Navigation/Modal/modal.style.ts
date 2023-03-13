import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledModal = styled.div`
    position:absolute;
    top:0;
    left:0;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
    width:100vw;
    overflow:hidden;
    backdrop-filter: blur(3px);
    z-index:9999;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.neutral[4]};
        opacity: 0.6;
        z-index: -1;
    }
`