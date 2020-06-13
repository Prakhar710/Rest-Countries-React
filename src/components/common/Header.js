import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles.js";
import { lightTheme, darkTheme } from "../Theme.js";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let localTheme = sessionStorage.getItem("theme");
    if (localTheme === null) {
      sessionStorage.setItem("theme", "light");
      localTheme = sessionStorage.getItem("theme");
    } else {
      localTheme && setTheme(localTheme);
    }
  }, []);

  const ToggleButton = () => {
    if (theme === "light") {
      return <i className="far fa-moon">Dark Mode</i>;
    } else {
      return <i className="far fa-sun">Light Mode</i>;
    }
  };

  const themeSetting = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light"
      ? sessionStorage.setItem("theme", "dark")
      : sessionStorage.setItem("theme", "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <header className="d-flex container justify-content-between">
          <Link to={`/`}>
            <h3>Where in the world?</h3>
          </Link>
          <div onClick={themeSetting}>
            <ToggleButton />
          </div>
        </header>
      </>
    </ThemeProvider>
  );
};

export default Header;
