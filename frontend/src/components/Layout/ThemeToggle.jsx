import React, { useState, useEffect } from "react";
import styles from "./ThemeToggle.module.css";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  // alert(savedTheme);
  console.log("satedTheme:", savedTheme);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return savedTheme === "dark" || (!savedTheme && prefersDark);
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }

    // Optional: Dispatch event for other components
    window.dispatchEvent(new Event("themeChanged"));
  };

  return (
    <div className={styles.themeContainer}>
      <button
        className={`${styles.toggleButton} ${isDark ? styles.dark : ""}`}
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span>{isDark ? "🌙" : "☀️"}</span>
      </button>
      <p  onClick={toggleTheme}
       aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
        <span>{isDark ? "Dark" : "Light"}</span>
      </p>
    </div>
  );
};

export default ThemeToggle;
