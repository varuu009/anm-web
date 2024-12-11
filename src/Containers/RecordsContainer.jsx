// import React from "react";
// import { Card, CardContent, Typography, Box, useMediaQuery, IconButton } from "@mui/material";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import MenuIcon from "@mui/icons-material/Menu";
// import SettingsIcon from "@mui/icons-material/Settings";
// import WarningIcon from "@mui/icons-material/Warning";
// import ErrorIcon from "@mui/icons-material/Error";
// import PieChart from "./PieChart";  // Assuming PieChart is your custom component

// // Register chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const getIconBasedOnEvent = (event) => {
//   switch (event) {
//     case "TXN_CANCELLED":
//       return <ErrorIcon />;
//     case "TXN_INITIATE":
//     case "TXN_PROCESS":
//     case "TXN_SUCCESS":
//     case "TXN_DECLINED":
//       return <SettingsIcon />;
//     case "TXN_USER_CANCELED":
//       return <WarningIcon />;
//     case "TXN_PIN_ENTRY":
//     case "TXN_PIN_ENTRY_FAILED":
//     case "TXN_PIN_ENTRY_SUCCESS":
//       return <MenuIcon />;
//     case "USB_DEBUG_ON":
//     case "USB_DEBUG_OFF":
//       return <SettingsIcon />;
//     case "ANDROID_VERSION_MISMATCH":
//     case "KERNEL_VERSION_MISMATCH":
//       return <WarningIcon />;
//     case "Tampered":
//     case "FRAUD":
//     case "DEVICE_ROOTED":
//       return <ErrorIcon />;
//     case "APP_DEVELOPER_MODE_ON":
//     case "APP_DEVELOPER_MODE_OFF":
//       return <SettingsIcon />;
//     case "OTP":
//       return <WarningIcon />;
//     case "LOGOUT":
//     case "LOGIN":
//       return <MenuIcon />;
//     case "DEVICE_UNREGISTER":
//     case "DEVICE_REGISTRATION_SUCCESS":
//     case "ATTESTATION_MONITORING_REGISTER":
//       return <SettingsIcon />;
//     case "NETWORK_FAILURE":
//     case "NETWORK_DOWN_TIME":
//     case "OTP_ERROR":
//     case "CERTIFICATE_DOWNLOAD_FAILURE":
//       return <ErrorIcon />;
//     default:
//       return <MenuIcon />;
//   }
// };

// const RecordsContainer = ({ data }) => {
//   const isSmallScreen = useMediaQuery("(max-width:600px)");

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: isSmallScreen ? "column" : "row",
//           gap: 3,
//           justifyContent: "center",
//           flexWrap: "wrap", // Ensures that items wrap on smaller screens
//         }}
//       >
//         {/* Card Container */}
//         {/* <Box sx={{ flex: 1, maxWidth: isSmallScreen ? "100%" : "40%" }}> */}
//         <Box sx={{ flex: 1, maxWidth: { xs: "100%", sm: "80%", md: "60%", lg: "40%", xl: "30%" } }}>

//           {data.map((card, index) => (
//             <Card
//               key={index}
//               sx={{
//                 marginBottom: 3,
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 backgroundColor: "background.paper",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-5px)",
//                   boxShadow: 6,
//                 },
//               }}
//             >
//               <CardContent sx={{ display: "flex", alignItems: "center", padding: 3 }}>
//                 <IconButton
//                   sx={{
//                     marginRight: 3,
//                     padding: "12px",
//                     borderRadius: "50%",
//                     color: "white",
//                     backgroundColor: "primary.main",
//                     boxShadow: 2,
//                     "&:hover": {
//                  color:"black"
//                 },
//                   }}
//                 >
//                   {getIconBasedOnEvent(card.event)}
//                 </IconButton>
//                 <Box sx={{ display: "flex", flexDirection: "column" }}>
//                   <Typography variant="h6" color="text.primary" fontWeight="bold" fontSize={"1rem"}>
//                     {card.event}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Count :{card.count}
//                   </Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>

//         {/* PieChart Container */}
//         {/* <Box
//           sx={{
//             flex: 1,
//             minWidth: isSmallScreen ? "100%" : "55%", // Smaller width for PieChart
//             maxWidth: isSmallScreen ? "100%" : "45%", // Prevent PieChart from becoming too wide on larger screens
//             transition: "all 0.3s ease", // Smooth transition for layout changes
//           }}
//         > */}
//              <Box sx={{ flex: 1, maxWidth: { xs: "100%", sm: "80%", md: "60%", lg: "40%", xl: "30%" } }}>
//           <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
//             <CardContent sx={{ padding: 3 }}>
//               <PieChart data={data} /> {/* Assuming PieChart is your custom component */}
//             </CardContent>
//           </Card>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default RecordsContainer;
import React from "react";
import { Card, CardContent, Typography, Box, useMediaQuery, IconButton } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import PieChart from "./PieChart";  // Assuming PieChart is your custom component

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const getIconBasedOnEvent = (event) => {
  switch (event) {
    case "TXN_CANCELLED":
      return <ErrorIcon />;
    case "TXN_INITIATE":
    case "TXN_PROCESS":
    case "TXN_SUCCESS":
    case "TXN_DECLINED":
      return <SettingsIcon />;
    case "TXN_USER_CANCELED":
      return <WarningIcon />;
    case "TXN_PIN_ENTRY":
    case "TXN_PIN_ENTRY_FAILED":
    case "TXN_PIN_ENTRY_SUCCESS":
      return <MenuIcon />;
    case "USB_DEBUG_ON":
    case "USB_DEBUG_OFF":
      return <SettingsIcon />;
    case "ANDROID_VERSION_MISMATCH":
    case "KERNEL_VERSION_MISMATCH":
      return <WarningIcon />;
    case "Tampered":
    case "FRAUD":
    case "DEVICE_ROOTED":
      return <ErrorIcon />;
    case "APP_DEVELOPER_MODE_ON":
    case "APP_DEVELOPER_MODE_OFF":
      return <SettingsIcon />;
    case "OTP":
      return <WarningIcon />;
    case "LOGOUT":
    case "LOGIN":
      return <MenuIcon />;
    case "DEVICE_UNREGISTER":
    case "DEVICE_REGISTRATION_SUCCESS":
    case "ATTESTATION_MONITORING_REGISTER":
      return <SettingsIcon />;
    case "NETWORK_FAILURE":
    case "NETWORK_DOWN_TIME":
    case "OTP_ERROR":
    case "CERTIFICATE_DOWNLOAD_FAILURE":
      return <ErrorIcon />;
    default:
      return <MenuIcon />;
  }
};

const RecordsContainer = ({ data }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ padding: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: 7,
          justifyContent: "center",
          flexWrap: "wrap", // Ensures that items wrap on smaller screens
        }}
      >
        {/* Card Container */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", sm: "70%", md: "50%", lg: "35%", xl: "25%" },
            marginBottom: { xs: 3, md: 0 }, // Add spacing for mobile and tablets
          }}
        >
          {data.map((card, index) => (
            <Card
              key={index}
              sx={{
                marginBottom: 3,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "background.paper",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", padding: 3 }}>
                <IconButton
                  sx={{
                    marginRight: 3,
                    padding: "12px",
                    borderRadius: "50%",
                    color: "white",
                    backgroundColor: "primary.main",
                    boxShadow: 2,
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  {getIconBasedOnEvent(card.event)}
                </IconButton>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" color="text.primary" fontWeight="bold" fontSize={"12px"}>
                    {card.event}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Count: {card.count}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* PieChart Container */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" },
          }}
        >
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent sx={{ padding: 3 }}>
              <PieChart data={data} /> {/* Assuming PieChart is your custom component */}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default RecordsContainer;

