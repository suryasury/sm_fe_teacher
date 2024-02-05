import { Typography, Button } from "@mui/material";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const RenderInfoCard = ({ section, sectionId, handleClick }) => (
  <div
    style={{
      backgroundColor: "rgb(249, 250, 251)",
      height: "auto",
      borderRadius: "10px",
      padding: "20px 60px 30px 60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
    key={sectionId}
  >
    <Typography variant="h6" style={{ opacity: "0.4" }}>
      {section}
    </Typography>
    <Button
      color="inherit"
      endIcon={<ReadMoreIcon />}
      onClick={() => {
        console.log("key", sectionId);
        handleClick(sectionId);
      }}
      style={{
        margin: "20px 0px 0px 0px",
        border: "1px solid grey",
      }}
    >
      View
    </Button>
  </div>
);

export default RenderInfoCard;
