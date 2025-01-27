// src/components/AIAdvisor.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const AIAdvisor = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate AI response
    setResponse(`AI: Thank you for your message: "${message}". We'll get back to you shortly.`);
    setMessage('');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        AI Business Advisor
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          rows={2}
          label="Ask a Question"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Send
        </Button>
      </form>
      {response && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          {response}
        </Typography>
      )}
    </Box>
  );
};

export default AIAdvisor;