import * as React from "react";
import { render } from "react-dom";
import { Editor } from "./pages/main";
import { Global, css } from "@emotion/react";
import "swiper/css";

const globalStyles = css`
  body {
    margin: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
`;

const Main: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Editor />
    </>
  );
};

render(<Main />, document.getElementById("app"));
