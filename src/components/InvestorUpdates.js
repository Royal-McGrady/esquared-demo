// src/components/InvestorUpdates.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const InvestorUpdates = () => {
  const [update, setUpdate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Update Posted:', update);
    setUpdate('');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Post Investor Update
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Your Update"
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Post Update
        </Button>
      </form>
    </Box>
  );
};

export default InvestorUpdates;