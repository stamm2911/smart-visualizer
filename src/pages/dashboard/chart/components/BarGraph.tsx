import { Grid, Typography, Paper } from "@mui/material";
import { PharusSecondaryLogo } from "../../../../assets/icons";
import ReactECharts from "echarts-for-react";
import { useChartData } from "../context/ChartDataContext";
import { deepmerge } from "@mui/utils";
import { customTheme } from "../../../../theme";

const DEFAULT_OPTION = {
  title: {
    text: "E-commerce vs Wholesale Sales",
    show: false,
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "bottom",
    itemWidth: 16,
    itemHeight: 16,
    textStyle: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 12,
      color: customTheme.palette.grey[700],
    },
    itemGap: 40,
  },
  xAxis: {
    type: "category",
    axisLabel: {
      color: customTheme.palette.grey[700],
      margin: 20,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: customTheme.palette.background.paper,
        width: 1,
      },
    },
  },
  yAxis: {
    nameTextStyle: {
      color: "transparent",
    },
    type: "value",
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: customTheme.palette.background.paper,
        width: 1,
      },
    },
  },
  series: [
    {
      name: "ecomm_sales",
      type: "bar",
      color: customTheme.palette.primary.main,
      barWidth: "10%",
      emphasis: {
        focus: "self",
      },
      itemStyle: {
        borderRadius: [2, 2, 0, 0],
      },
      blur: {
        itemStyle: {
          opacity: 0.8,
        },
      },
    },
    {
      name: "wholesale_sales",
      type: "bar",
      color: customTheme.palette.secondary.main,
      barWidth: "10%",
      itemStyle: {
        borderRadius: [2, 2, 0, 0],
      },
      emphasis: {
        focus: "self",
      },
      blur: {
        itemStyle: {
          opacity: 0.8,
        },
      },
    },
  ],
  barCategoryGap: "0%",
  barGap: "0%",
  grid: {
    left: "3%",
    right: "4%",
    bottom: "15%",
    containLabel: true,
  },
  axisPointer: {
    type: "shadow",
  },
};

export const BarGraph = () => {
  const { data } = useChartData();

  return (
    <Grid item>
      <Paper variant="outlined">
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          spacing={1.5}
        >
          <Grid
            item
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>Revenues</Typography>
            <PharusSecondaryLogo />
          </Grid>
          <ReactECharts option={deepmerge(DEFAULT_OPTION, data || {})} />
        </Grid>
      </Paper>
    </Grid>
  );
};
