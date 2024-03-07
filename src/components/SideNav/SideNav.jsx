import { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import NavItem from '../NavItem/NavItem';
import HomeIcon from '@mui/icons-material/Home';

const SideNav = ({ spotifyApi, token }) => {
	useEffect(() => {
		async function getPlaylist() {
			if (!spotifyApi) return;

			const data = await spotifyApi.getUserPlaylists();
			console.log(data.body);
		}

		getPlaylist();
	}, [spotifyApi, token]);

	return (
		<Box
			sx={{
				backgroundColor: 'Background.default',
				width: 230,
				height: '100%',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Box p={3}>
				<img src="public\Spotify_Logo.png" alt="Spotify Logo" width={'75%'} />
			</Box>
			<NavItem name="Home" Icon={HomeIcon} target="/" />
			<Box px={3} py={1}>
				<Divider sx={{ backgroundColor: '#ffffff40' }} />
			</Box>
			<Box sx={{ overflowY: 'auto', flex: 1 }}>Pop</Box>
		</Box>
	);
};

export default SideNav;
