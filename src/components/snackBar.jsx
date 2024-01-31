import React, { useState } from "react";
import { Snackbar, Alert, styled } from "@mui/material";

const SnackbarStyled = styled(Snackbar)({
  position: "absolute",
  top: 0,
});

const SnackBar = ({ open, message, severity, onClose }) => {
  //   const [isOpen, setIsOpen] = useState(open);

  //   const handleClose = (event, reason) => {
  //     if (reason === "clickaway") {
  //       return;
  //     }
  //     setIsOpen(false);
  //   };

  return (
    <SnackbarStyled
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </SnackbarStyled>
  );
};

export default SnackBar;
