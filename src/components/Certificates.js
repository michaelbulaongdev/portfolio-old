import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	CardMedia,
	Container,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {listCert} from './lists';
import Spacer from './Spacer';

export default function Certificates() {
	return (
		<div>
			<Spacer id='Certificates' />
			<Container maxWidth='sm' align='center'>
				<Typography variant='h3'>My Certificates</Typography>
				<List>
					{listCert.map((item) => (
						<Accordion disableGutters='true'>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1a-content'
								id='panel1a-header'>
								<ListItem key={item.link} disablePadding>
									<ListItemIcon>
										<WorkspacePremiumIcon color='success' size='large' />
									</ListItemIcon>
									<ListItemText secondary={item.title} />
								</ListItem>
							</AccordionSummary>
							<AccordionDetails>
								<a
									className='cert-image'
									target='_blank'
									rel='noreferrer'
									href={item.link}>
									<CardMedia sx={{minHeight: 350}} image={item.image} />
								</a>
							</AccordionDetails>
						</Accordion>
					))}
				</List>
			</Container>
		</div>
	);
}
