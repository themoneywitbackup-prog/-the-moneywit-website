import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { useCallback, useEffect, useState } from "react";
type Props = {
	targetDate?: string;
};

export default function Countdown({
	targetDate = `${new Date().getFullYear()}-11-01T00:00:00`,
}: Props) {
	const timeInSeconds = useCallback(
		() => getSecondsUntilDate(new Date(targetDate)),
		[targetDate],
	);
	const [sec, setSec] = useState(timeInSeconds);
	const days = Math.floor(sec / 86400); // 86400 seconds in a day
	const hh = Math.floor((sec % 86400) / 3600); // Remaining hours after days
	const mm = Math.floor((sec % 3600) / 60);
	const ss = sec % 60;

	// Add interval to countdown every second
	useEffect(() => {
		if (sec <= 0) return; // Stop when countdown reaches 0
		const interval = setInterval(() => {
			setSec((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);
		// Cleanup interval on component unmount or when sec changes
		return () => clearInterval(interval);
	}, [sec]);
	return (
		<NumberFlowGroup>
			<div
				style={{
					fontVariantNumeric: "tabular-nums",
				}}
				className="~text-3xl/4xl flex items-baseline font-semibold countdown"
			>
				<span>
					<NumberFlow
						trend={-1}
						value={days}
						suffix=""
						format={{ minimumIntegerDigits: 2 }}
					/>
					<p>days</p>
				</span>
				<span>
					<NumberFlow
						prefix=""
						trend={-1}
						value={hh}
						suffix=""
						format={{ minimumIntegerDigits: 2 }}
					/>
					<p>hours</p>
				</span>
				<span>
					<NumberFlow
						prefix=""
						trend={-1}
						value={mm}
						suffix=""
						digits={{ 1: { max: 5 } }}
						format={{ minimumIntegerDigits: 2 }}
					/>
					<p>mins</p>
				</span>
				<span>
					<NumberFlow
						prefix=""
						trend={-1}
						value={ss}
						suffix=""
						digits={{ 1: { max: 5 } }}
						format={{ minimumIntegerDigits: 2 }}
					/>
					<p>secs</p>
				</span>
			</div>
		</NumberFlowGroup>
	);
}

export function getSecondsUntilDate(targetDate: Date): number {
	const now = new Date();
	const diffInMs = targetDate.getTime() - now.getTime();
	return Math.floor(diffInMs / 1000);
}
