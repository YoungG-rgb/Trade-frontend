import React from 'react';
import Box from "@mui/material/Box";
import Sidebar from "@/components/adminPanel/Sidebar";

const AboutUs = () => {
  return (
    <div>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <Sidebar/>
        <h1>About Us</h1>
      </Box>
    </div>
  );
};

export default AboutUs;
