import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyled from "Theme/GlobalStyled";
import Provider from "Theme/Provider";
import App from "./App";
import Fonts from "Theme/Fonts";

const Root = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={Provider}>
    <Fonts />
    <GlobalStyled />
    <App />
  </ThemeProvider>,
  Root
);
