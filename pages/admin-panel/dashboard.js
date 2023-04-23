import React from 'react';
import Sidebar from "@/components/adminPanel/Sidebar";
import Box from "@mui/material/Box";

const Dashboard = () => {
  return (
    <div>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <Sidebar/>
        <h1>Home</h1>
      </Box>
    </div>
  );
};

export default Dashboard;
