import { useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";

interface StatCounterProps {
	target: number;
}

export default function StatCounter({ target }: StatCounterProps) {
	const [value, setValue] = useState(0);

	useEffect(() => {
		setValue(target);
	}, [target]);

	return (
		<span className="inline-flex">
			<NumberFlow
				value={value}
				transformTiming={{
					duration: 1500,
					easing: "ease-out",
				}}
			/>
		</span>
	);
}
