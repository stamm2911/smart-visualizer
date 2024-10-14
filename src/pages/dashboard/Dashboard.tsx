import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { PharusButton } from "../../shared-components/PharusButton";
import { Chart } from "./chart";
import { ChartDataProvider } from "./chart/context/ChartDataContext";
import { ChatBot } from "./chat-bot";

export function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Grid container>
      <ChartDataProvider>
        <Chart open={open} />
      </ChartDataProvider>

      <ChatBot open={open} setOpen={setOpen} />

      <PharusButton
        onClick={handleDrawerOpen}
        sx={{
          zIndex: 100,
          position: "fixed",
          bottom: theme.spacing(4),
          right: theme.spacing(4),
          ...(open && { display: "none" }),
        }}
      />
    </Grid>
  );
}
