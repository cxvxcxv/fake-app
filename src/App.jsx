import { useSelector } from "react-redux";
import "./App.css";
import Main from "./components/Main";
import Qr from "./components/Qr";
import Messages from "./components/Messages";
import Services from "./components/Services";
// import moment from "moment";
//moment().format("DD.MM.YYYY hh:mm:ss")

const App = () => {
	const navbar = useSelector(state => state.navbar); //assigning a new variable as an object

	if (navbar.activePage === "main") return <Main />;
	else if (navbar.activePage === "qr") return <Qr />
	else if (navbar.activePage === "messages") return <Messages />
	else if (navbar.activePage === "services") return <Services />;
};

export default App;

//591x1220
//margin - 24px
//search bar h - 66px -->
//footer h - 85px -->

//imgur - https://imgur.com/a/wf3XyK0
//imgur2 - https://imgur.com/a/SHxFPku

//magnum - https://kaspi.kz/reswp/img/start/appServices/magnum.png
//chocofood - https://kaspi.kz/reswp/img/start/appServices/chocofood.png
