import { ComponentsOverrides, Theme } from "@mui/material";

export const ButtonStyles: ComponentsOverrides<Theme>["MuiButton"] = {
  outlined: ({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[500],
    borderRadius: "8px",
    padding: theme.spacing(1.25),
    lineHeight: 0.5,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.04)",
    border: `1px solid ${theme.palette.grey[400]}`,
    textTransform: "none",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    ".MuiButton-icon": {
      color: theme.palette.grey[600],
    },
  }),
};

