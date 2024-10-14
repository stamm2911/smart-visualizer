import { SouthEast } from "@mui/icons-material";
import { Grid, Typography, Paper, Chip } from "@mui/material";

export const TotalRevenue = () => {
  return (
    <Grid item>
      <Paper variant="outlined">
        <Grid
          height="153px"
          container
          direction="column"
          justifyContent="space-between"
          spacing={1.5}
        >
          <Grid item>
            <Typography>E-Commerce Revenue</Typography>
          </Grid>
          <Grid item container>
            <Typography variant="h5">$6,019</Typography>
            <Grid item xs={12} mt={0.6}>
              <Chip
                label="-36.3%"
                variant="outlined"
                color="error"
                icon={<SouthEast />}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
