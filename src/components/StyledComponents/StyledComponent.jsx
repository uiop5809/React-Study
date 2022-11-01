import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

const defaultTheme = {
  color: "green",
  borderColor: "green",
};

const redTheme = {
  color: "red",
  borderColor: "red",
};

const GlobalStyle = createGlobalStyle`
  button {
    background: pink;
  }
`;

export default function StyledComponent() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <>
      <div>
        <GlobalStyle />
        <button onClick={() => setTheme(redTheme)}>red</button>
        <button onClick={() => setTheme(defaultTheme)}>green</button>

        <Button>Normal</Button>

        <ThemeProvider theme={theme}>
          <Button>Themed</Button>
        </ThemeProvider>

        <Button theme={theme}>Themed</Button>
      </div>
      <div>
        <button>Other</button>
      </div>
    </>
  );
}
