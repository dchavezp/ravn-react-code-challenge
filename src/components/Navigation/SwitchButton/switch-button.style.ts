import { theme } from "@/theme/theme";
import styled from "styled-components";
import { SwitchButtonProps } from ".";

export const StyledSwitchContainer = styled.div`
    display:flex;
    flex-direction:row;
`;
const getColorIsList = ({ isList }: SwitchButtonProps) => {
    return isList ? `${theme.colors.primary[4]}` : `${theme.colors.neutral[1]}`
}
const getBorderColorIsList = ({ isList }: SwitchButtonProps) => {
    return isList ? `1px solid ${theme.colors.primary[4]}` : "0px"
}
export const StyledSwitchButton = styled.button<SwitchButtonProps>`
    cursor: pointer;
    background-color:transparent;
    height:40px;
    color:${(props) => getColorIsList(props)};
    border:${(props) => getBorderColorIsList(props)};
    border-radius:${theme.borderRadius.s};
`;