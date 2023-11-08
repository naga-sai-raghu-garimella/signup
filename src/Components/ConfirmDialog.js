import React from "react";
import {Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Button} from "@mui/material"

//dialog box for delete confirmation
const ConfirmDialog = ({ open, close, handleConfirm, message }) => {
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm} variant="contained" color="success">
          Yes
        </Button>
        <Button onClick={close} variant="contained" color="primary">
          cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
