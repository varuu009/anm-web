import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
} from '@mui/material';
import Title from "../Containers/Title";
const AddTerminal = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
    <Title data={"Add Terminal"} />
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={toggleDialog}
          sx={{ marginTop: 2 }}
        >
          + Add Terminal
        </Button>
      </div>

      {/* Dialog for Add Processor */}
      <Dialog
        open={openDialog}
        onClose={toggleDialog}
        fullWidth // Add fullWidth to take more space
        maxWidth="sm" // Adjust the maxWidth to 'sm' or 'md' as per your requirement
      >
        {/* <DialogTitle>Add Processor</DialogTitle> */}
        <DialogContent>
          <Box
            sx={{
              maxWidth: 600,
              margin: '0 auto',
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              backgroundColor: '#f7f7f7',
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              Add Terminal
            </Typography>
            <TextField label="Processor Name" variant="outlined" fullWidth />
            <TextField label="Processor Code" variant="outlined" fullWidth />
            <TextField label="Currency" variant="outlined" fullWidth />
            <Button variant="contained" color="primary" size="large">
              Next
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={toggleDialog} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddTerminal;
