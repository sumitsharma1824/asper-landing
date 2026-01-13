import { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="theme-toggle">
      <span>Theme</span>
      <div className="toggle-btn" onClick={() => setTheme(theme === "dark" ? "red" : "dark")}>
        <div className={`toggle-circle ${theme}`}></div>
      </div>
    </div>
  );
}

export default ThemeToggle;
