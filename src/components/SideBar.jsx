import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { sidebarData } from "../JsonData/sideBarJson";
import MenuIcon from "@mui/icons-material/Menu";
import * as FaIcons from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const usenav = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const getIcon = (iconName) => {
    const IconComponent = FaIcons[iconName];
    if (IconComponent) {
      return <IconComponent />;
    }
    return null;
  };

  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      {isSmallScreen && (
        <IconButton
          onClick={toggleSidebar}
          sx={{
            position: "fixed",
            top: 10,
            left: 24,
            zIndex: 11000,
            color: "black",
            display: "block",
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isSmallScreen ? "temporary" : "persistent"}
        anchor="left"
        open={isSmallScreen ? open : true}
        onClose={() => setOpen(false)}
        sx={{
          width: 250,
          flexShrink: 0,
          height: "100vh",
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: "#f4f7fc",
            boxShadow: "2px 0px 15px rgba(0, 0, 0, 0.1)",
            paddingTop: "40px",
            color: "rgb(76 103 174)",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            transition: "width 0.3s ease",
          },
        }}
      >
        <List sx={{ flexGrow: 1, overflowY: "auto", paddingBottom: "20px" }}>
          {sidebarData.map((menu, index) => (
            <ListItem
              key={menu.title}
              onClick={() => {
                usenav(menu.route);
                if (isSmallScreen) {
                  setOpen(false);
                }
              }}
              sx={{
                cursor: "pointer",
                marginBottom: index === sidebarData.length - 1 ? "30px" : "0",
              }}
            >
              <ListItemIcon sx={{ minWidth: 32, color: "rgb(76 103 174)" }}>
                {getIcon(menu.icon)}
              </ListItemIcon>
              <ListItemText primary={menu.title} sx={{ marginLeft: 1 }} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Sidebar;
