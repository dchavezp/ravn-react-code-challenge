import { Link } from "react-router-dom";
import { StyledNotFound } from "./not-found.style";
import { RiArrowRightSLine } from "react-icons/ri";
export const NotFoundPage = () => {
  return (
    <StyledNotFound>
      <h1>Wooops!</h1>
      <h3>We can&apos;t find the page you are looking for</h3>
      <Link to={"/"} style={{ color: "white", fontWeight: "lighter" }}>
        Go back to dashboard <RiArrowRightSLine size={16} />
      </Link>
    </StyledNotFound>
  );
};
