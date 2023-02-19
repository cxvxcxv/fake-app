import Header from "./Header";
import Ads from "./Ads";
import ControlPanel from "./ControlPanel";
import Navbar from "./Navbar";

const Main = () => {
	return (
		<main>
			<Header />
			<Ads position="top" />
			<ControlPanel />
			<Ads position="middle" />
			<Ads position="bottom" />
			<Navbar />
		</main>
	);
};

export default Main;
