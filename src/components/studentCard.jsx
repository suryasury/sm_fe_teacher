import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Grid,
  Chip,
} from "@mui/material";

const StudentCard = ({ student, handleDetailsClick }) => {
  const getLabelTextAndColor = (type, term, feeDetails) => {
    let message = "";
    let color = "";

    if (feeDetails && feeDetails.length > 0) {
      let feesDetailsObject = feeDetails.find((data) => data.term === term);

      if (feesDetailsObject) {
        if (feesDetailsObject.is_paid) {
          message = "Paid";
          color = "success";
        } else {
          message = "Unpaid";
          color = "error";
        }
      } else {
        message = "No data";
        color = "default";
      }
    } else {
      message = "No data";
      color = "default";
    }

    return type === "label" ? message : color;
  };

  let t1Label = getLabelTextAndColor("label", 1, student.fees_details);
  let t2Label = getLabelTextAndColor("label", 2, student.fees_details);
  let t3Label = getLabelTextAndColor("label", 3, student.fees_details);
  let t1Color = getLabelTextAndColor("color", 1, student.fees_details);
  let t2Color = getLabelTextAndColor("color", 2, student.fees_details);
  let t3Color = getLabelTextAndColor("color", 3, student.fees_details);
  return (
    <Card
      style={{
        boxShadow: "none",
        borderRadius: "10px",
        backgroundColor: "rgb(249, 250, 251)",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {student.name} - {student.admission_number}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Parents Name
            </Typography>
            <Typography variant="body1">
              {student.father_name || student.mother_name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Phone Number
            </Typography>
            <Typography variant="body1">
              {student.primary_mobile_no || student.alternate_mobile_number}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ paddingTop: "15px" }}>
          <Grid item xs={4}>
            <Typography variant="body2" color="textSecondary">
              Term 1
            </Typography>
            <Chip label={t1Label} color={t1Color} size="small" />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" color="textSecondary">
              Term 2
            </Typography>
            <Chip label={t2Label} color={t2Color} size="small" />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" color="textSecondary">
              Term 3
            </Typography>
            <Chip label={t3Label} color={t3Color} size="small" />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions style={{ justifyContent: "flex-start" }}>
        <Button
          onClick={() => {
            handleDetailsClick(student.id);
          }}
          color="primary"
          type="button"
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default StudentCard;
