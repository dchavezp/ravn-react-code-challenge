import { theme } from "@/theme/theme";
import styled from "styled-components";

const sizes = {
    s: "32px",
    md: "40px",
    lg: "48px"
};
interface StyledImageProps {
    sizeVariant: "s" | "md" | "lg"
}

export const StyledAvatar = styled.img<StyledImageProps>`
    width:${({ sizeVariant }) => sizes[sizeVariant]};
    height:${({ sizeVariant }) => sizes[sizeVariant]};
    border-radius:9999px;
    object-fit:cover;
`;

export const StyledAvatarContainer = styled.div`
    width:fit-content;
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:8px;
    ${theme.typography.body.M}
    color:${theme.colors.neutral[1]}
`