import useDarkMode from 'use-dark-mode';
import DarkModeToggle from "react-dark-mode-toggle";

const Toggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <DarkModeToggle onChange={darkMode.toggle} checked={darkMode.value} size={50}/>
    </div>
  );
};

export default Toggle;
