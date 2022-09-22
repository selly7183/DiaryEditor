import React, { useEffect, useState } from "react";

const UnmountTest = () => {
	useEffect(() => {
		console.log("Mount!");

		return () => {
			// Unmount 시점에 실행되게 됨.
			console.log("Unmount");
		};
	}, []);
	return <div>Unmount Testing Componet</div>;
};

const LifeCycle = () => {
	const [isVisible, setIsVisible] = useState(false);
	const toggle = () => setIsVisible(!isVisible);

	return (
		<div style={{ padding: 20 }}>
			<button onClick={toggle}>on/off</button>
			{isVisible && <UnmountTest />}
		</div>
	);
};

export default LifeCycle;
