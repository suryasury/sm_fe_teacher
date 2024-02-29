import { Typography, Button } from "@mui/material";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const RenderInfoCard = ({
  section,
  sectionId,
  studentsCount = 0,
  handleClick,
}) => (
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
    <Typography variant="h4" style={{ opacity: "0.6", fontWeight: "bolder" }}>
      {section}
    </Typography>
    <br />
    <Typography variant="h6" style={{ opacity: "0.4" }}>
      Students: {studentsCount}
    </Typography>
    <Button
      variant="outlined"
      endIcon={<ReadMoreIcon />}
      onClick={() => {
        console.log("key", sectionId);
        handleClick(sectionId);
      }}
      style={{
        margin: "20px 0px 0px 0px",
      }}
    >
      View Students
    </Button>
  </div>
);

export default RenderInfoCard;
