import * as React from "react";
import COLORS from "../../misc/COLORS";
import { Link } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: COLORS.dark,
  borderRadius: 12,
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}></h1>

      <Link to="/profile001a">
        <p>Hello</p>
      </Link>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
