import { ComponentsOverrides, Theme } from "@mui/material";

export const PaperStyles: ComponentsOverrides<Theme>["MuiPaper"] = {
  outlined: ({ theme }) => ({
    borderRadius: theme.spacing(1.25),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    // If, for some reason, the border property or any of its derivatives are used to set a border, the Paper container stops being responsive.
    boxShadow: `0 0 0 1px ${theme.palette.grey[400]}`,
    border: "none",
  }),
};
