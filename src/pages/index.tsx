import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import { DataStore } from "../stores/DataStore";
import { GlobalStyles } from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { Nav } from "../components/nav";

interface ThemeSetting {
  theme: string
}

const Index: React.FC = () => {
  const [theme, setTheme] = useState<ThemeSetting>(null)

  useEffect(() => setTheme(localStorage.getItem('theme')), [])
  console.log(theme)
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
          <Nav />
          <p>Test</p>
        </div>
      </>
    </ThemeProvider>
  )
}

export default Index