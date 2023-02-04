import React from "react";
import { useState } from "react";

function Header() {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    setTheme(theme === "light" ? "light" : "light");
  };

  const handleClick2 = () => {
    setTheme(theme === "dark" ? "dark" : "dark");
  };

  return (
    <div className={`App ${theme}`}>
      <button onClick={handleClick2}>Dark</button>
      <button onClick={handleClick}>Light</button>
    </div>
  );
}

export default Header;
