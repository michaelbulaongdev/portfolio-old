import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	CardMedia,
	Container,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {listCert} from './lists';

export default function Certificates() {
	return (
		<Container maxWidth='sm' align='center'>
			<Typography variant='h4'>Certificates</Typography>
			<List>
				{listCert.map((item) => (
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1a-content'
							id='panel1a-header'>
							<ListItem key={item.link} disablePadding>
								<ListItemButton target='_blank' href={item.link}>
									<ListItemIcon>
										<WorkspacePremiumIcon color='success' size='large' />
									</ListItemIcon>
									<ListItemText secondary={item.title} />
								</ListItemButton>
							</ListItem>
						</AccordionSummary>
						<AccordionDetails>
							<CardMedia sx={{minHeight: 400}} image={item.image} />
						</AccordionDetails>
					</Accordion>
				))}
			</List>
		</Container>
	);
}
