import { useState, useEffect } from "react";
import { Box, Divider } from "@mui/material";

const SideNav = ({ spotifyApi, token }) => {
    return <Box sx={{
        backgroundColor: 'Background.default',
        width: 230,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'

    }}>
        <Box p={3}>
            <img src="public\Spotify_Logo.png" alt="Spotify Logo" width={'75%'} />
        </Box>
        <Box px={3} py={1}>
            <Divider sx={{ backgroundColor: '#ffffff40' }} />
        </Box>
        <Box sx={{ overflowY: 'auto', flex: 1 }}>
            Pop
        </Box>
    </Box>;
};

export default SideNav;