import React from "react";
import { Box, Typography } from '@mui/material';

export const Profile = () => {
    return (
        <Box sx={{ minWidth: 360, position: 'absolute', top: '25%', left: '35%' }}>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            PROFILE
            </Typography>
        </Box>
    );
}