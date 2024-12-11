import React from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const usenav = useNavigate();

  // Navigation links for the footer
  const footerLinks = [
    { label: "Devices", route: "/" },
    { label: "Txn", route: "/Transactions" },
    { label: "Pin", route: "/Password" },
    { label: "Security", route: "/Security" },
    { label: "General", route: "/General" },
  ];

  // Media query for screens below 700px
  const isBelow700px = useMediaQuery("(max-width:700px)");

  return (
    <>
      {/* Show footer only when the screen size is below 700px */}
      {isBelow700px && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#f4f7fc",
            color: "#5b54c3",
            padding: 2,
            display: "flex",
            justifyContent: "space-around", // Spread out buttons evenly
            alignItems: "center",
            boxShadow: 2,
            zIndex: 10000,
            borderTop: "1px solid #ccc", // Add a slight border for separation
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%", // Ensure buttons stretch across the row
              gap: 2, // Small gap between buttons
            }}
          >
            {footerLinks.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                sx={{
                  fontWeight: 700,
                  fontSize: {
                    xs: "0.7rem", // Extra small screens (phones)
                    sm: "0.85rem", // Small screens (tablet)
                    md: "1rem", // Medium screens (large tablet / desktop)
                  },
                  padding: "6px 12px", // Adjust padding for compactness
                  minWidth: "auto", // Remove minimum width to prevent buttons from stretching
                  "&:hover": {
                    backgroundColor: "#d3d3d3", // Light hover effect
                  },
                }}
                onClick={() => usenav(item.route)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Footer;
