// src/components/Header.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../hooks/useTheme';

const Header = ({ user }: { user: string | null }) => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-lightBackground dark:bg-darkBackground border-b border-gray-300 dark:border-gray-700">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>
      <nav className="flex space-x-4">
        <Link href="/" className="text-lightForeground dark:text-darkForeground">Home</Link>
        {/* Adicione mais links aqui conforme necessário */}
      </nav>
      <div className="flex items-center space-x-4">
        {user && <p className="text-lightForeground dark:text-darkForeground">Bem-vindo, {user}</p>}
        <button onClick={toggleTheme} className="text-lightForeground dark:text-darkForeground">
          {theme === 'dark' ? '🌞' : '🌜'}
        </button>
      </div>
    </header>
  );
};

export default Header;


