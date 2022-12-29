import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    darkMode
      ? (document.body.classList.add("dark"),
        document.body.classList.add("bg-gray-900"),
        document.body.classList.remove("bg-white"))
      : (document.body.classList.remove("dark"),
        document.body.classList.add("bg-white"),
        document.body.classList.remove("bg-gray-900"));
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
