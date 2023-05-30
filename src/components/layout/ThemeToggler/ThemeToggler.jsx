import useTheme from "@/hooks/useTheme";
import { Classic } from "@theme-toggles/react";

import styles from "./ThemeToggler.module.scss";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <label className={styles.toggle}>
        <span>Toggle Theme</span>
        <Classic duration={750} onToggle={toggleTheme} toggled={theme === 'dark'}/>
      </label>
    </>
  );
};

export default ThemeToggler;
