import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const EditNodeModal = ({ node, onClose, onUpdate, onDelete }) => {
  const [label, setLabel] = useState(node.data.label);

  const handleUpdate = () => {
    if (!label.trim()) return alert("Label cannot be empty!");
    onUpdate(node.id, label);
    onClose();
  };

  const handleDelete = () => {
    onDelete(node.id);    
    onClose();
    alert(` ${node.data.label} deleted successfully!`);
  };

  return (
    <Modal open={!!node} onClose={onClose} aria-labelledby="modal-title">
      <Box sx={style}>
        <Typography variant="h6" color="primary" align="center">
          Edit Node
        </Typography>
        <TextField
          fullWidth
          label="Node Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          margin="normal"
        />
        <Box display="flex" justifyContent="space-between">
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditNodeModal;
