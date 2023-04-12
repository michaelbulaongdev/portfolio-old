import {Box, Container, Grid, Toolbar, Typography} from '@mui/material';
import MBProfilePic from '../images/profile pic.jpeg';

export default function Home() {
	return (
		<section>
			<Container id='Home' maxWidth='md' align='center'>
				<Toolbar />
				<Grid container my={3}>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: 'flex',
							alignContent: 'center',
							flexDirection: 'column',
						}}>
						<Typography variant='h6' pt={7}>
							Hi, my name is
						</Typography>
						<Typography
							variant='h1'
							pb={7}
							sx={{fontFamily: 'Permanent Marker'}}>
							Mike
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box
							component='img'
							alt="Mike's profile picture"
							// src='https://i.imgur.com/z33vWH4.jpeg' //replaced with local import
							src={MBProfilePic}
							sx={{
								width: 250,
								borderRadius: '50%',
							}}
						/>
					</Grid>
				</Grid>
				<Box
					mt={'1rem'}
					sx={{
						maxWidth: 500,
						borderTop: 1,
						borderBottom: 1,
						p: 2,
						display: 'flex',
						flexDirection: 'column',
					}}>
					<Typography variant='h5' align='center'>
						music technologist
					</Typography>
					<Typography variant='h5' align='center'>
						web developer
					</Typography>
				</Box>
			</Container>
		</section>
	);
}
