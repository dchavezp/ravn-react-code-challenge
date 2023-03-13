import { theme } from "@/theme/theme";
import styled from "styled-components";
import { TagProps } from ".";

const getVariantColor = (props: TagProps) => {
    return props.backgroundColor === "neutral" ? theme.colors[props.backgroundColor][1] : theme.colors[props.backgroundColor || "primary"][4]
}
const getVariantBackground = (props: TagProps,) => {
    return props.variant === "solid" ? getVariantColor(props) : "transparent"
}
const getBorderColor = (props: TagProps) => {
    return props.variant === "solid" ? "0px" : `1px solid ${getVariantColor(props)}`
}
export const StyledTag = styled.button<TagProps>`
    position:relative;
    background-color:transparent;
    display:flex;
    gap:8px;
    flex-direction:row;
    align-items:center;
    height:fit-content;
    padding-left:16px;
    padding-right:16px;
    padding-top:4px;
    padding-bottom:4px;
    text-transform:uppercase;
    border-radius:${theme.borderRadius.xs};
    overflow:hidden;
    color:${(props) => getVariantColor(props)};
    border:${(props) => getBorderColor(props)};
    ${theme.typography.body.M};
    font-weight:bold;
    z-index:0;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${(props) => getVariantBackground(props)};
        opacity: ${(props) => props.opacity ?? 0.1};
        z-index: -1;
    }
`