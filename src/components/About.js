import {Box, Container, Toolbar, Typography} from '@mui/material';

export default function About() {
	return (
		<Container id='About' maxWidth='md' align='center'>
			<Toolbar />
			<Box>
				<Typography mb={3} variant='h4'>
					About Me
				</Typography>
				<Typography variant='body1' maxWidth={700}>
					I studied music and physics in college. I love tinkering with things,
					trying to understand how they work, and eventually finding ways to
					improve them. For me, learning is a never ending quest so I consider
					myself a student of this enormous university called 'life'.
				</Typography>
			</Box>
		</Container>
	);
}
