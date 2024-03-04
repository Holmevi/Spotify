import { Box, Button } from "@mui/material";

const Home = () => {
    return <Box sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5
    }}>
        <img src="\TA-logo.png" alt="Jimmy Holmevi" style={{ maxWidth: '50%', maxHeight: '50%' }} />
        <Button size="large" variant="contained" href="https://beautify.graphics/">Visit my Homepage</Button>
    </Box>
};

export default Home;