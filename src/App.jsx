import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/global";
import Header from "./components/Header/index";

export default function App() {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      <main>
        <Outlet />
        {}
      </main>
    </ThemeProvider>
  );
}
