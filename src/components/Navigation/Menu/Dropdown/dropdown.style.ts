import { theme } from "@/theme/theme";
import { motion } from "framer-motion"
import styled from "styled-components";
import { Menuprops } from "..";
const position = {
    left: "left:0; bottom:-96px;",
    right: "right: 0; bottom:-72px;"
}
export const StyledDropdown = styled(motion.div) <Menuprops>`
    position:absolute;
    overflow:hidden;
    z-index:4;
    width:fit-content;
    border:1px solid ${theme.colors.neutral[2]};
    border-radius:${theme.borderRadius.s};
    overflow:hidden;
    padding-top:8px;
    padding-bottom:8px;
    display:flex;
    flex-direction:column;
    gap:8px;
    ${(props) => position[props.position]};
    background-color:${theme.colors.neutral[3]};
`