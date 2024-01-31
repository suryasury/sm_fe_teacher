import { Typography } from "@mui/material";
const infoCardStyle = {
  backgroundColor: "rgb(249, 250, 251)",
  height: "auto",
  margin: "20px",
  borderRadius: "10px",
  padding: "20px",
  width: "90%",
};
const RenderInfoCard = ({ studentName, classAndSection, admissionNumber }) => (
  <div style={{ ...infoCardStyle }}>
    <div style={{ marginBottom: "10px" }}>
      <Typography variant="h6" style={{ opacity: "0.4" }}>
        Student name
      </Typography>
      <Typography variant="p">{studentName}</Typography>
    </div>
    <div style={{ marginBottom: "10px" }}>
      <Typography variant="h6" style={{ opacity: "0.4" }}>
        Admission number
      </Typography>
      <Typography variant="p">{admissionNumber}</Typography>
    </div>
    <div style={{ marginBottom: "10px" }}>
      <Typography variant="h6" style={{ opacity: "0.4" }}>
        Class & Section
      </Typography>
      <Typography variant="p">{classAndSection}</Typography>
    </div>
  </div>
);

export default RenderInfoCard;
