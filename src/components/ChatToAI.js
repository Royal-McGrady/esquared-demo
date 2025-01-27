// src/components/ChatToAI.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, List, ListItem, ListItemText } from '@mui/material';

const ChatToAI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      const aiMessage = { text: `AI: You asked about "${input}". Here's some insight...`, sender: 'ai' };

      setMessages([...messages, userMessage, aiMessage]);
      setInput('');
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Chat to AI
      </Typography>
      <Paper elevation={3} sx={{ p: 2, height: '400px', overflowY: 'auto' }}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index} sx={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              <Paper
                elevation={1}
                sx={{
                  p: 1,
                  backgroundColor: message.sender === 'user' ? '#e3f2fd' : '#f5f5f5',
                }}
              >
                <ListItemText primary={message.text} />
              </Paper>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box sx={{ display: 'flex', mt: 2 }}>
        <TextField
          fullWidth
          placeholder="Ask AI about your reports..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button variant="contained" onClick={handleSend} sx={{ ml: 2 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatToAI;