import { ComponentsOverrides, Theme } from "@mui/material/styles";

export const TextFieldStyles: ComponentsOverrides<Theme>["MuiTextField"] = {
  root: ({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      padding: theme.spacing(1),
      borderRadius: theme.spacing(1),
      "& fieldset": {
        borderColor: theme.palette.secondary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.main,
      },
      "& .MuiInputBase-input": {
        height: "36px",
        borderRadius: theme.spacing(1),
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main,
      },
      "& .MuiSvgIcon-root": {
        color: theme.palette.secondary.main,
      },
    },
  }),
};
