import React, { useEffect, useState } from 'react';
import LightButton from '../../assets/LightButton.jpg';
import DarkButton from '../../assets/darkButton.png';

const DarkMode = () => {
  const [theme, setTheme] = useState('light');

  // Sync with localStorage on first load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Apply theme to <html> element whenever it changes
  useEffect(() => {
    const element = document.documentElement;
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <div className="relative">
      {theme === 'light' ? (
        <img
          src={LightButton}
          alt="Enable dark mode"
          onClick={() => setTheme('dark')}
          className="w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10"
        />
      ) : (
        <img
          src={DarkButton}
          alt="Enable light mode"
          onClick={() => setTheme('light')}
          className="w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10"
        />
      )}
    </div>
  );
};

export default DarkMode;
