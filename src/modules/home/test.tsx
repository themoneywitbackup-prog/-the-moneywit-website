import { useEffect, useState } from "react";

const TestCompForAbdul = () => {
	const [state, setState] = useState("No One");
	useEffect(() => {
		setState("BaZz");
	}, []);
	return (
		<div className="">
			<h2>Hello {state} </h2>
		</div>
	);
};

export default TestCompForAbdul;
