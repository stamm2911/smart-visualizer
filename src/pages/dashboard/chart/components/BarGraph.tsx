import { Grid, Typography, Paper } from "@mui/material";
import { PharusSecondaryLogo } from "../../../../assets/icons";
import ReactECharts from "echarts-for-react";

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
    data: ["ecomm_sales", "wholesale_sales"],
    itemWidth: 16,
    itemHeight: 16,
    textStyle: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 12,
      color: "#808080",
    },
    itemGap: 40,
  },
  xAxis: {
    type: "category",
    data: [
      "202309",
      "202310",
      "202311",
      "202312",
      "202401",
      "202402",
      "202403",
      "202404",
      "202405",
      "202406",
      "202407",
      "202408",
      "202409",
    ],
    axisLabel: {
      color: "#808080",
      margin: 20,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#F4F4F4",
        width: 1,
      },
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#F4F4F4",
        width: 1,
      },
    },
  },
  series: [
    {
      name: "ecomm_sales",
      type: "bar",
      data: [
        0.8, 11.4, 9.7, 20.5, 11.7, 29, 17.2, 28.9, 42.2, 26.5, 31.8, 50.2,
        33.9,
      ],
      color: "#5A8CFE",
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
      data: [
        0, 1.2, 0.1, 0.7, 4.2, 57.1, 34.2, 32.2, 162.9, 18.2, -4.8, 31.1, 83.8,
      ],
      color: "#CC72E9",
      barWidth: "10%",
      itemStyle: {
        borderRadius: [2, 2, 0, 0],
        emphasis: {
          focus: "self",
        },
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
          <ReactECharts option={DEFAULT_OPTION} />
        </Grid>
      </Paper>
    </Grid>
  );
};
