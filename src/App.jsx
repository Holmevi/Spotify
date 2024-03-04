import './App.css';
import { Box } from '@mui/material';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Login from './pages/Login.jsx';

function App({ spotifyApi }) {
	return (
		<Box className="App">
			<Login />
			<Dashboard spotifyApi={spotifyApi} />
		</Box>
	);
}

export default App;