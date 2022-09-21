import React, { useEffect, useState } from "react";

const UnmountTest = () => {
	useEffect(() => {
		console.log("Mount!");

		return () => {
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
