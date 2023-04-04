import {useState, useRef, useEffect} from 'react';

export default function FadeInSection(props) {
	const [isVisible, setVisible] = useState(true);
	const domRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setVisible(entry.isIntersecting));
		});

		const {current} = domRef;
		observer.observe(current);

		return () => observer.unobserve(current);
	}, []);

	return (
		<div
			className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
			ref={domRef}>
			{props.children}
		</div>
	);
}
