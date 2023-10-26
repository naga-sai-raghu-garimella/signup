import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

//dialog box for delete confirmation
const ConfirmDialog = ({ open, close, handleDelete }) => {
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>Do you want to delete?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDelete} variant="contained" color="success">
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
