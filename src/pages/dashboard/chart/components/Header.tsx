import { SettingsOutlined } from "@mui/icons-material";
import { Grid, Typography, Button, useTheme } from "@mui/material";

export const Header = () => {
  const theme = useTheme();

  return (
    <Grid container justifyContent="space-between" mb={theme.spacing(6)}>
      <Grid item>
        <Typography color="text.secondary">October 2024</Typography>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined" startIcon={<SettingsOutlined />}>
          Settings
        </Button>
      </Grid>
    </Grid>
  );
};
