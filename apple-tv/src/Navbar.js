import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GlobalNavbar from "./Styles/GlobalNavbar";

const Navbar = () => {
  return (
    <nav>
      <GlobalNavbar>
        <a href="https://www.apple.com/" style={{ textDecoration: "none" }}>
          <FontAwesomeIcon
            className="costa"
            icon="apple-alt"
            style={{ paddingTop: "17.6px" }}
          />
        </a>
        <a
          href="https://www.apple.com/eg/mac/"
          style={{ textDecoration: "none" }}
        ></a>
        <a
          href="https://www.apple.com/eg/mac/"
          style={{ textDecoration: "none" }}
        >
          Mac
        </a>
        <a
          href="https://www.apple.com/eg/mac/"
          style={{ textDecoration: "none" }}
        >
          {" "}
          iPad{" "}
        </a>
        <a
          href="https://www.apple.com/eg/mac/"
          style={{ textDecoration: "none" }}
        >
          {" "}
          iPhone{" "}
        </a>
        <a
          href="https://www.apple.com/eg/mac/"
          style={{ textDecoration: "none" }}
        >
          {" "}
          Watch{" "}
        </a>
        <a
          href="https://www.apple.com/eg/mac/"
          style={{ textDecoration: "none" }}
        >
          {" "}
          TV{" "}
        </a>
        <a
          href="https://www.apple.com/eg/mac/"
          style={{ textDecoration: "none" }}
        >
          {" "}
          Music{" "}
        </a>
        <a
          href="https://www.apple.com/eg/mac/"
          style={{ textDecoration: "none" }}
        >
          {" "}
          Support{" "}
        </a>
        <a
          href="https://www.apple.com/eg/mac/"
          style={{ textDecoration: "none" }}
        >
          {" "}
          Where to Buy{" "}
        </a>
      </GlobalNavbar>
    </nav>
  );
};

export default Navbar;
