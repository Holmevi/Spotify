import './App.css';
import { Box } from '@mui/material';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

function App({ spotifyApi }) {
	return (
		<Box className="App">
			<Home />
		</Box>
	);
}

export default App;