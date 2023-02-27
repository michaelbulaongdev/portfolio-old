import {useState} from 'react';
import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import HideOnScroll from './HideOnScroll';

export default function DrawerAppBar(props) {
	const {window} = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const drawerWidth = 240;
	const navItems = ['Home', 'About', 'Works', 'Certificates', 'Contact'];

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
			<Typography variant='h6' sx={{my: 2}}>
				Michael Bulaong
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton href={`#${item}`} sx={{textAlign: 'center'}}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{display: 'flex'}}>
			{/* <HideOnScroll> */}
			<AppBar component='nav'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{mr: 2, display: {sm: 'none'}}}>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
						Michael Bulaong
					</Typography>
					<Box sx={{display: {xs: 'none', sm: 'block'}}}>
						{navItems.map((item) => (
							<Button href={`#${item}`} key={item} sx={{color: '#fff'}}>
								{item}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			{/* </HideOnScroll> */}
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: {xs: 'block', sm: 'none'},
						'& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
					}}>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}
