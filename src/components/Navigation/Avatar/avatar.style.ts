import styled from "styled-components";

const sizes = {
    s: '32px',
    md: '40px',
    lg: '48px'
}
interface StyledImageProps {
    sizeVariant: 's' | 'md' | 'lg'
}

export const StyledImage = styled.img<StyledImageProps>`
    width:${({ sizeVariant }) => sizes[sizeVariant]};
    height:${({ sizeVariant }) => sizes[sizeVariant]};
    border-radius:9999px;
    object-fit:cover;
`