import { CssBaseline, ThemeProvider } from "@mui/material";
import { Dashboard } from "./pages/dashboard";
import { customTheme } from "./theme";
import "@fontsource/poppins";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
