import { ComponentsOverrides, Theme } from "@mui/material";

export const ChipStyles: ComponentsOverrides<Theme>["MuiChip"] = {
  root: ({ theme }) => ({
    fontSize: theme.typography.body1.fontSize,
    padding: theme.spacing(0.5),
    height: "28px",
    ".MuiSvgIcon-root": {
      fontSize: "20px",
      margin: 0,
    },
    ".MuiChip-label": { margin: "0 4px", padding: 0 },
  }),
};
