'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Verifica el modo guardado en localStorage o la preferencia del sistema
  useEffect(() => {
    const storedMode = localStorage.getItem('theme');
    if (storedMode === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (storedMode === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Si no hay preferencia guardada, detecta el sistema
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setIsDarkMode(prefersDarkMode);
      document.documentElement.classList.toggle('dark', prefersDarkMode);
    }
  }, []);

  // Cambia entre el modo oscuro y claro
  const toggleMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleMode}
      aria-label='Toggle dark mode'
      className='p-2 text-foreground/60 hover:text-foreground/80 transition-colors'
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
}
