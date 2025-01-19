import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useTheme } from "../../context/ThemeContext"; 

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border-2 border-primary dark:border-primary-dark bg-background dark:bg-background-dark hover:bg-background-hover dark:hover:bg-background-hover-dark transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <HiOutlineSun className="w-5 h-5 text-primary"  />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-secondary" />
      )}
    </button>
  )
}