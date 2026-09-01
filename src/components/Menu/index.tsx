import { FileCogIcon, HomeIcon, ListClockIcon, MoonIcon, SunIcon } from "lucide-react";

import styles from './styles.module.css'
import { useState, useEffect } from "react";

type AvailableThemes = 'dark' | 'light'

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#" aria-label="Ir para a Home" title="Ir para a Home"><HomeIcon /></a>
      <a className={styles.menuLink} href="#" aria-label="Ver Histórico" title="Ver Histórico"><ListClockIcon /></a>
      <a className={styles.menuLink} href="#" aria-label="Configurar Tempos " title="Configurar Tempos "><FileCogIcon /></a>
      <a className={styles.menuLink} href="#" aria-label="Mudar Tema" title="Mudar Tema" onClick={handleThemeChange}>{nextThemeIcon[theme]}</a>
    </nav>
  )
}