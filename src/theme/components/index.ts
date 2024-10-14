import { Components, Theme } from "@mui/material/styles";
import { ButtonStyles } from "./Button.styles";
import { PaperStyles } from "./Paper.styles";
import { ChipStyles } from "./Chip.styles";

export const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: ButtonStyles,
  },
  MuiPaper: {
    styleOverrides: PaperStyles,
  },
  MuiChip: {
    styleOverrides: ChipStyles,
  },
};
