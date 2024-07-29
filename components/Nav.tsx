"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { Container, PaletteMode } from "@mui/material";

import { FlexBox, StyledText } from "./styled/style";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { AnimatedTextCharacter } from "./AnimatedText";

interface IProps {
  window?: () => Window;
  onNavItemClick: (item: any) => void;
}

const drawerWidth = 240;
export const navItems = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Work" },
  { id: 4, name: "Skills" },
  { id: 5, name: "Contact" },
  // { id: 5, name: "Resume" },
];

export const DrawerAppBar: React.FC<IProps> = ({
  window,
  onNavItemClick,
}: IProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 183, 255, 0)", "rgba(0, 183, 255, 1)"]
  );
  const height = useTransform(scrollY, [0, 100], [120, 60]);

  const onButtonClick = (item: string) => {
    onNavItemClick(item);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        minWidth: "60dvw",
        p: 2,
        backgroundColor: "background.paper",
        flexGrow: 1,
      }}
    >
      <Typography variant="subtitle1" sx={{ mr: 2 }}>
        PRUTHVIRAJ HAIYALKAR
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => onButtonClick(item.name)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              alignItems={"center"}
              gap={2}
              sx={{
                mr: 2,
                display: { xs: "block" },
                width: { xs: "100%", lg: "50%" },
              }}
            >
              <AnimatedTextCharacter
                text={"PRUTHVIRAJ HAIYALKAR"}
                color="black"
                tag={"h3"}
              />
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  sx={{ color: "#2D3250" }}
                  onClick={() => onButtonClick(item?.name)}
                >
                  <Typography variant="body2" color="text.primary">
                    {item.name}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Container>
      </AppBar>
    </Box>
  );
};
