import {
	Container,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import {listCert} from './lists';

export default function Certificates() {
	return (
		<Container maxWidth='xs' align='center'>
			<Typography variant='h4'>Certificates</Typography>
			<List>
				{listCert.map((item) => (
					<ListItem key={item.link} disablePadding>
						<ListItemButton target='_blank' href={item.link}>
							<ListItemIcon>
								<WorkspacePremiumIcon color='success' size='large' />
							</ListItemIcon>
							<ListItemText secondary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Container>
	);
}
