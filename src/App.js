import DrawerAppBar from './components/DrawerAppBar';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

export default function App() {
	return (
		<div>
			<DrawerAppBar />
			<Home />
			<About />
			<Works />
			<Certificates />
			<Contact />
		</div>
	);
}
