import { theme } from "@/theme/theme";
import styled from "styled-components";
export const StyledDatePickerContainer = styled.div`
    width:fit-content;
    color:${theme.colors.neutral[1]};
    border:1px solid ${theme.colors.neutral[1]};
    border-radius:${theme.borderRadius.xs};
    padding:0;
    & .rdp {
        --rdp-cell-size: 40px;
        --rdp-background-color: ${theme.colors.primary[4]};
    };
`;
export const StyledNavigationContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:40px;
    border-bottom:1px solid ${theme.colors.neutral[1]};
    padding-left:8px;
    padding-right:8px;
    color:${theme.colors.neutral};
    & button{
        background-color:transparent;
        color:${theme.colors.neutral[1]};
        display:flex;
        justify-content:center;
        align-items:center;
        border:0px;
        cursor: pointer;
    }
`
export const StyledDatePickerButton = styled.button`
    cursor: pointer;
    width:100%;
    height:40px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    border:0px;
    border-top:1px solid ${theme.colors.neutral[1]};
    color:${theme.colors.primary[4]};
    ${theme.typography.body.M}
`;