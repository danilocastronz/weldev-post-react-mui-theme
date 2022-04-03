import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import React from "react";

import { SwitchModeButton } from "./components/SwitchModeButton/SwitchModeButton";

import { ColorContext } from "./ColorContext";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <SwitchModeButton />
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
