import facilitator from "@/pages/campaigns/_components/facilitator.png";
import facilitatorSignature from "@/pages/campaigns/_components/signature.png";
const MeetOurFacilitator = () => {
	return (
		<section className="our-facilitator">
			<div className="our-facilitator__container">
				<h2 className="our-facilitator__title">Meet The Facilitator</h2>

				<div className="our-facilitator__layout">
					<div className="our-facilitator__image">
						<img src={facilitator.src} alt="" width={600} height={640} />
					</div>
					<div className="our-facilitator__content">
						<div className="our-facilitator__details">
							<p>
								Hi,I’m Oler—securities trader turned financial educator. As a
								CFA Charterholder, I have years of experience helping people
								just like you overcome their financial fears and build a secure,
								recession-proof future.
							</p>
							<p>
								I work with entrepreneurs and professionals to secure their
								financial future, by providing education, resources, and
								community support on personal finance and investing.
							</p>
							<p>
								Many people struggle with financial confidence because they lack
								the understanding of money as a tool and haven’t made the best
								financial decisions.
							</p>
							<p>
								My mission is to bridge that knowledge gap and empower you to
								take control of your financial destiny.
							</p>
							<p>
								This workshop is one of my ways of helping you get started on
								the right path.
							</p>
							<img src={facilitatorSignature.src} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MeetOurFacilitator;
