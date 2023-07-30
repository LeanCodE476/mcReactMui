import { useState } from "react";
import { NavListDrawer } from "./NavListDrawer.jsx";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      title: "Configuracion",
      icon: <SettingsIcon />,
    },
    {
      title: "Cerrar Sesion",
      icon: <LogoutIcon />,
    },
  ];
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#341cb6" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            size="inherit"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: "1", fontSize: 30, textAlign: "center" }}
          >
            Mis Cuentas
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component="a"
                sx={{ fontSize: 14 }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};
