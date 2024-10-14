import { CssBaseline, ThemeProvider } from "@mui/material";
import { customTheme } from "./theme";
import "@fontsource/poppins";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
