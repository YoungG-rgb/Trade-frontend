import React from 'react';
import Box from "@mui/material/Box";
import Sidebar from "@/components/adminPanel/Sidebar";

const Users = () => {
  return (
    <div>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <Sidebar/>
        <h1>Users</h1>
      </Box>
    </div>
  );
};

export default Users;
