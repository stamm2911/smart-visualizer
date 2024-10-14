import { Grid, Typography, Divider, styled, useTheme } from "@mui/material";
import { BarGraph, Header, TotalRevenue } from "./components";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -240, // drawerWidth
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
  /**
   * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
   * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
   * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
   * proper interaction with the underlying content.
   */
  position: "relative",
}));

export const Chart = ({ open }: { open: boolean }) => {
  const theme = useTheme();

  return (
    <Main open={open}>
      <Header />

      <Typography variant="h6">Revenue</Typography>

      <Grid container direction="column" rowSpacing={1.5} mt={1.5}>
        <TotalRevenue />
        <BarGraph />
      </Grid>

      <Divider
        variant="fullWidth"
        sx={{
          mt: theme.spacing(3),
          width: "100%",
          height: "5px",
        }}
      />
    </Main>
  );
};
