import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Components/UI/themes';

import { GlobalStyle } from './Components/GlobalStyle';
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { BtnTheme } from "./Components/UI";
import SwitchTheme from "./Components/SwitchTheme";

function App() {

  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  }

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BtnTheme onClick={toggleTheme}>
        <SwitchTheme theme={theme} />
      </BtnTheme>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
