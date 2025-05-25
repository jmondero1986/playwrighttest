import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4">
          Welcome to the Dashboard!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This is your personalized dashboard content.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 3 }}
          onClick={onLogout}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
