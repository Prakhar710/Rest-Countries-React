import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles.js";
import { lightTheme, darkTheme } from "../Theme.js";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let localTheme = localStorage.getItem("theme");
    if (localTheme === null) {
      localStorage.setItem("theme", "light");
      localTheme = localStorage.getItem("theme");
    } else {
      localTheme && setTheme(localTheme);
    }
  }, []);

  const ToggleButton = () => {
    if (theme === "light") {
      return <i className="far fa-moon">&nbsp;Dark Mode</i>;
    } else {
      return <i className="far fa-sun">&nbsp;Light Mode</i>;
    }
  };

  const themeSetting = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light"
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <header className="d-flex justify-content-between header align-items-center">
          <Link to={`/`} style={{textDecoration:'none'}} className="links">
            <h3>Where in the world?</h3>
          </Link>
          <div onClick={themeSetting} className="cursor">
            <ToggleButton />
          </div>
        </header>
      </>
    </ThemeProvider>
  );
};

export default Header;
