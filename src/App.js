import React, { useEffect, useRef, useState } from 'react';
import './App.css';

export const App = () => {
	const [visible, setVisible] = useState(false);
	const divRef = useRef(false);

	useEffect(() => {
		divRef.current.className = 'hidden-did-fade-out';
	}, []);

	function onAnimationEnd(e) {
		if (e.animationName === 'fadeOutOpacity') {
			e.target.className = 'hidden-did-fade-out';
		}
	}

	return (
		<div>
			<button
				onClick={() => {
					setVisible(!visible);
				}}
			>
				Show/HIde
			</button>
			<div ref={divRef} onAnimationEnd={onAnimationEnd} className={visible ? 'visible' : 'hidden'}>
				I'm a div
			</div>
		</div>
	);
};

export default App;
