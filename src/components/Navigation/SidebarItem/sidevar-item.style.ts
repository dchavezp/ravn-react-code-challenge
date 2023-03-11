import { theme } from "@/theme/theme";
import styled from "styled-components";
interface StyledContainerProps {
    selected: boolean
}
export const StyledContainer = styled.button<StyledContainerProps>`
    cursor: pointer;
    background: ${({ selected }) => selected ? "linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%)" : "transparent"};
    border:0;
    border-right:${({ selected }) => selected ? `4px solid ${theme.colors.primary[4]}` : '0px'};
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:16px;
    padding-left:16px;
    padding-right:16px;
    padding-top:16px;
    padding-bottom:16px;
    text-transform:uppercase;
    ${theme.typography.body.M}
    font-weight:bold;
    color:${({ selected }) => selected ? `${theme.colors.primary[4]}` : `${theme.colors.neutral[2]}`}
`