import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
export const NavListDrawer = ({ navLinks }) => {
  return (
    <Box sx={{ width: 230 }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Typography variant="h3" sx={{ fontSize: 18 }}>
                  {item.title}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
