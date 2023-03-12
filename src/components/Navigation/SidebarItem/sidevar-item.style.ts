import { theme } from "@/theme/theme";
import styled from "styled-components";
import { SidebarItemProps } from ".";

const getBackgroundColorIsSelected = (selected: boolean) => { return selected ? "linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%)" : "transparent" }

const getBorderColorIsSelected = (selected: boolean) => {
    return selected ? `${theme.colors.primary[4]}` : `${theme.colors.neutral[2]}`
}
export const StyledSidebarItem = styled.button <Omit<SidebarItemProps, "redirectTo">>`
    cursor: pointer;
    position:relative;
    transition-timing-function:cubic-bezier(0.075, 0.82, 0.165, 1);
    transition:all;
    background:transparent;
    transition-duration:100ms;
    border:0;
    border-right:${({ selected }) => selected ? `4px solid ${theme.colors.primary[4]}` : "0px"};
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
    color:${({ selected }) => getBorderColorIsSelected(selected || false)};
    &::before{
        content: '';
        position: absolute;
        transition:all;
        transition-timing-function:cubic-bezier(0.075, 0.82, 0.165, 1);
        transition-duration:300ms;
        top: 0;
        left: 0;
        width: ${({ selected }) => selected ? "100%" : "0%"};
        height: 100%;
        background: ${({ selected }) => getBackgroundColorIsSelected(selected || false)};
        z-index: 1;
    }
`;