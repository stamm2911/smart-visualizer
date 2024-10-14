import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Close } from "@mui/icons-material";
import { Grid, IconButton, Divider, Drawer } from "@mui/material";
import { PharusButton } from "../../shared-components/PharusButton";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
}));

export function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
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

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <Close />
          </IconButton>
        </DrawerHeader>
        <Divider />
      </Drawer>
    </Grid>
  );
}
