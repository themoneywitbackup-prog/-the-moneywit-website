import ReactDOMServer from "react-dom/server";
import MeetOurFacilitator from "./meet-facilator";

export const htmlStringMeetOurFacilitator = ReactDOMServer.renderToString(
	<MeetOurFacilitator />,
);
