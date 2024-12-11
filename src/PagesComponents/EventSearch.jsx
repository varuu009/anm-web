import React from "react";
import Title from "../Containers/Title";
import { useSelector } from "react-redux";
import {
  CircularProgress,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

function EventSearch() {
  const { data, error, loading } = useSelector((state) => state.merchantData);

  return (
    <div>
      <Title data={"Event Search"} />
      {loading && (
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Box display="flex" justifyContent="center" mt={5}>
          <Typography variant="h6" color="error">
            {`Error: ${error}`}
          </Typography>
        </Box>
      )}

      {data && data.eventCount && data.eventCount.length > 0 && (
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={3}
          sx={{
            mt: 3,
            px: 2,
            pb: 3,
          }}
        >
          {data.eventCount.map((item, id) => (
            <Card
              key={id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 100,
                boxShadow: 5,
                borderRadius: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 8,
                },
                backgroundColor: "#e3f2fd",
                overflow: "hidden",
                padding: 2,
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#1976d2",
                    fontSize: 16,
                  }}
                >
                  {item.event}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Count: {item.count}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </div>
  );
}

export default EventSearch;
