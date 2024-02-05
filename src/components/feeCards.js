import { Typography, Grid, Card, CardContent } from "@mui/material";
import { LoadingButton } from "@mui/lab";
const FeeCardStyle = {
  backgroundColor: "rgb(249, 250, 251)",
  boxShadow: "none",
  borderRadius: "10px",
  padding: "10px",
  marginTop: "30px",
};
const FeeCard = ({ term, dueDate, amount, status }) => (
  <Card style={{ ...FeeCardStyle }} key={term}>
    <CardContent>
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">
            Term
          </Typography>
          <Typography variant="body1">{term}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">
            Due Date
          </Typography>
          <Typography variant="body1">
            {dueDate
              ? new Date(dueDate).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : ""}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">
            Amount
          </Typography>
          <Typography variant="body1">₹{amount.toFixed(1)}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary">
            Status
          </Typography>
          <Typography variant="body1" color={status ? "green" : "red"}>
            {status ? "Paid" : "Pending"}
          </Typography>
        </Grid>
      </Grid>
      {/* <Grid container spacing={6}>
        <Grid item lg m sm xl xs>
          <LoadingButton
            onClick={handleClick}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={loading}
            style={{
              marginTop: "30px",
            }}
          >
            {status ? "Download recipt" : "Pay"}
          </LoadingButton>
        </Grid>
      </Grid> */}
    </CardContent>
  </Card>
);

export default FeeCard;
