import React from "react";
import { StyledError } from "./error.style";
interface ErrorProps {
  message?: string;
}
export const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <StyledError>
      <h1>Wooops! something went wrong</h1>
      <h4>{message}</h4>
    </StyledError>
  );
};
