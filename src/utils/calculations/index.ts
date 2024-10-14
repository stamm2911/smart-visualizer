import { type ChartDataFormated } from "../../pages/dashboard/chart/context/ChartDataContext";

export const getCurrentTimestamp = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export const getTotalRevenue = (chartConfig: ChartDataFormated | null) => {
  if (!chartConfig) return;

  return chartConfig.series.reduce((total, series) => {
    const seriesSum = series.data.reduce((sum, item) => sum + item.value, 0);
    return total + seriesSum;
  }, 0);
};
