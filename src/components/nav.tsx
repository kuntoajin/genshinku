import { useEffect, useState } from "react";

export function Nav() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
      console.log('test')
    }

    useEffect(() => {localStorage.setItem('theme', theme)}, [theme])

    return <button onClick={themeToggler}>Switch Theme</button>
}