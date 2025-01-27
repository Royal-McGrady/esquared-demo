// src/components/FounderProfile.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const FounderProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Updated:', profile);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Update Your Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={profile.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Company"
          name="company"
          value={profile.company}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Save Changes
        </Button>
      </form>
    </Box>
  );
};

export default FounderProfile;