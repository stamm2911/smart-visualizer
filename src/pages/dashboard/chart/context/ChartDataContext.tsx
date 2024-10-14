import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

interface ChartData {
  legend: {
    top: string;
    data: string[];
  };
  xAxis: { data: string[] }[];
  yAxis: { name: string }[];
  series: {
    name: string;
    type: string;
    data: { value: number }[];
  }[];
}

export interface ChartDataFormated extends Omit<ChartData, "xAxis" | "yAxis"> {
  xAxis: { data: string[] };
  yAxis: { name: string };
}

interface ChartDataContextType {
  data: ChartDataFormated | null;
  loading: boolean;
  error: string | null;
}

const ChartDataContext = createContext<ChartDataContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useChartData = () => {
  const context = useContext(ChartDataContext);
  if (context === undefined) {
    throw new Error("useChartData must be used within a ChartDataProvider");
  }
  return context;
};

interface ChartDataProviderProps {
  children: ReactNode;
}

export const ChartDataProvider: React.FC<ChartDataProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<ChartDataFormated | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<ChartData>(
          import.meta.env.VITE_CHART_API_URL
        );
        setData({
          legend: data.legend,
          xAxis: data.xAxis[0],
          series: data.series,
          yAxis: data.yAxis[0],
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.log(err);
        setError(
          "An error retrieving the chart data occurred. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ChartDataContext.Provider value={{ data, loading, error }}>
      {children}
    </ChartDataContext.Provider>
  );
};
