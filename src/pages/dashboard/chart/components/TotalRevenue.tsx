import { SouthEast } from "@mui/icons-material";
import { Grid, Typography, Paper, Chip, Skeleton } from "@mui/material";
import { ChartDataFormated, useChartData } from "../context/ChartDataContext";

const getTotalRevenue = (chartConfig: ChartDataFormated | null) => {
  if (!chartConfig) return;

  return chartConfig.series.reduce((total, series) => {
    const seriesSum = series.data.reduce((sum, item) => sum + item.value, 0);
    return total + seriesSum;
  }, 0);
};

export const TotalRevenue = () => {
  const { data, loading } = useChartData();

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
            {loading ? (
              <Skeleton
                width="90px"
                height="60px"
                sx={{ borderRadius: "10px" }}
              />
            ) : (
              <Typography variant="h5">
                ${getTotalRevenue(data) || "-"}
              </Typography>
            )}
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
