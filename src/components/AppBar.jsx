// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Button,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   useMediaQuery,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const usenav = useNavigate();

//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => {
//     setDrawerOpen(open);
//   };

//   const isMobile = useMediaQuery("(max-width:600px)");

//   const menuItems = [
//     { label: "Device Users", route: "/" },
//     { label: "Transactions", route: "/Transactions" },
//     { label: "Password", route: "/Password" },
//     { label: "Security", route: "/Security" },
//     { label: "General", route: "/General" },
//   ];

//   return (
//     <AppBar
//       position="sticky"
//       sx={{ backgroundColor: "#f4f7fc", color: "#5b54c3" }}
//     >
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           My App
//         </Typography>

//         {isMobile ? (
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={() => toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         ) : (
//           <Box sx={{ fontWeight: 700 }}>
//             {menuItems.map((item, index) => (
//               <Button
//                 key={index}
//                 color="inherit"
//                 sx={{ fontWeight: 700 }}
//                 onClick={() => usenav(item.route)}
//               >
//                 {item.label}
//               </Button>
//             ))}
//           </Box>
//         )}

//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={() => toggleDrawer(false)}
//         >
//           <Box
//             sx={{ width: 250 }}
//             role="presentation"
//             onClick={() => toggleDrawer(false)}
//           >
//             <List>
//               {menuItems.map((item, index) => (
//                 <ListItem button key={index} onClick={() => usenav(item.route)}>
//                   <ListItemText primary={item.label} />
//                 </ListItem>
//               ))}
//             </List>
//           </Box>
//         </Drawer>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React from "react";
import { AppBar, Toolbar, Box, Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const usenav = useNavigate();

  const isMobile = useMediaQuery("(max-width:700px)");

  const menuItems = [
    { label: "Device Users", route: "/" },
    { label: "Transactions", route: "/Transactions" },
    { label: "Password", route: "/Password" },
    { label: "Security", route: "/Security" },
    { label: "General", route: "/General" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#f4f7fc", color: "#5b54c3" }}
    >
      <Toolbar sx={{display:"flex",justifyContent:"flex-end"}}>
        {/* Logo or Title */}
        {/* <Box sx={{ flexGrow: 1, fontWeight: 700 }}>My App</Box> */}

        {/* Render menu items only if it's not a small screen */}
        {!isMobile && (
          <Box sx={{ fontWeight: 700 }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                sx={{ fontWeight: 700 }}
                onClick={() => usenav(item.route)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
