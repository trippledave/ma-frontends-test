import React, { useState } from "react";
import {
  Router,
} from "@reach/router";
import CssBaseline from '@material-ui/core/CssBaseline';
import ToDo from "./components/ToDo";
import Container from '@material-ui/core/Container';
import "./App.css";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, amber } from '@material-ui/core/colors';
import NavBar from "./components/NavBar";

const modules = [ //get config from server
  {
    name: "Seite in Blau",
    url: "/blue",
    theme: createMuiTheme({
      palette: {
        primary: blue,
      },
    })
  },
  {
    name: "Andere Seite Amber",
    url: "/amber",
    theme: createMuiTheme({
      palette: {
        primary: amber,
      },
    })
  },
];

export default function App() {
  const [theme, setTheme] = useState(modules[0].theme); // setting the initial theme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <NavBar modules={modules} />
        <Router>
          <ToDo path={modules[0].url} setTheme={setTheme} module={modules[0]} />
          <ToDo path={modules[1].url} setTheme={setTheme} module={modules[1]} />
        </Router>
      </Container>
    </ThemeProvider>
  );
}