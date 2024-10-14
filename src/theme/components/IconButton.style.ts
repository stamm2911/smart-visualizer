import { ComponentsOverrides, Theme } from "@mui/material";

export const IconButtonStyles: ComponentsOverrides<Theme>["MuiIconButton"] = {
  root: ({ theme }) => ({
    ".MuiSvgIcon-root": {
      color: theme.palette.grey[600],
      fontSize: "20px",
    },
  }),
};
