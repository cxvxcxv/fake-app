import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import "./Services.css"

const Services = () => {
	const user = useSelector(state => state.user);

	return (
		<main>
			<section className="header">
				<p className="service-name">Сервисы</p>
				<div>
					<p>Қаз</p>
					<p className="lang">Рус</p>
				</div>
			</section>
			<div className="profile">
				<div>
					{user.name}
				</div>
			</div>
			<Navbar />
		</main>
	);
}

export default Services