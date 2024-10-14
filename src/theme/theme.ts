import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { components } from "./components";
import { typography } from "./typography";

export const themeOptions = {
  palette,
  typography,
  components,
};

export const customTheme = createTheme(themeOptions);
