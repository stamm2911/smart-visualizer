import { Components, Theme } from "@mui/material/styles";
import { ButtonStyles } from "./Button.styles";
import { PaperStyles } from "./Paper.styles";
import { ChipStyles } from "./Chip.styles";
import { IconButtonStyles } from "./IconButton.style";
import { TextFieldStyles } from "./TextField.styles";

export const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: ButtonStyles,
  },
  MuiIconButton: {
    styleOverrides: IconButtonStyles,
  },
  MuiPaper: {
    styleOverrides: PaperStyles,
  },
  MuiChip: {
    styleOverrides: ChipStyles,
  },
  MuiTextField: {
    styleOverrides: TextFieldStyles,
  },
};
