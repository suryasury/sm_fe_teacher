import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const NoDataCard = ({ message }) => {
  return (
    <Card
      style={{
        boxShadow: "none",
        backgroundColor: "rgb(249, 250, 251)",
        borderRadius: "10px",
        marginTop: "20px",
        height: "150px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <CardContent>
        <Typography variant="h6" color="textSecondary" align="center">
          {message || "No fees details found"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoDataCard;
