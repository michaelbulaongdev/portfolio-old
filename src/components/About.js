import {Box, Container, Typography} from '@mui/material';
import Spacer from './Spacer';

export default function About() {
	return (
		<div>
			<Spacer id='About' />
			<Container maxWidth='md' align='center'>
				<Box>
					<Typography mb={3} variant='h3'>
						About Me
					</Typography>
					<Typography variant='body1' maxWidth={700}>
						I studied music and physics. I love tinkering with things, trying to
						understand how they work, and eventually finding ways to improve
						them. For me, learning is a never ending quest so I consider myself
						a student of this enormous university called 'life'.
					</Typography>
				</Box>
			</Container>
		</div>
	);
}
