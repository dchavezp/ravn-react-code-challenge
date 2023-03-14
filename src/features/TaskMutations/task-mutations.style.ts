import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledTaskMutation = styled.div`
    background-color:${theme.colors.neutral[3]};
    width: fit-content;
    color:${theme.colors.neutral[1]};
    border-radius:${theme.borderRadius.s};
    display:flex;
    flex-direction:column;
    gap:24px;
    padding:16px;
    & .title{
        margin:0;
        ${theme.typography.display.xS}
    }
    & .tags{
        display:flex;
        flex-direction:row;
        gap:16px;
    }
    & .actions{
        display:flex;
        flex-direction:row-reverse;
        gap:24px
    }
    & input{
        width:calc(100% - 32px);
        padding-top:4px;
        padding-left:16px;
        padding-right:16px;
        padding-bottom:4px;
        ${theme.typography.body.L};
        border: 1px solid ${theme.colors.neutral[2]};
        border-radius:${theme.borderRadius.s}
    }
`