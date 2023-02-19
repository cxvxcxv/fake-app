import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { changeActivePage } from "../features/navbar/navbarSlice";

const Navbar = () => {
	const navbar = useSelector(state => state.navbar);
	const dispatch = useDispatch();

	return (
		<nav>
			<div
				className={`${
					navbar.activePage === "main" ? "main-btn-active" : "main-btn"
				} `}
				onClick={() => dispatch(changeActivePage("main"))}
			>
				{/* button image is set in a div */}
				<div />
				<p
					className={`${
						navbar.activePage === "main" ? "main-p-active" : "main-p"
					} `}
				>
					Главная
				</p>
			</div>
			<div className="qr-btn" onClick={() => dispatch(changeActivePage("qr"))}>
				{/* button image is set in a div */}
				<div />
				<p>Kaspi QR</p>
			</div>
			<div
				className={`${
					navbar.activePage === "messages"
						? "messages-btn-active"
						: "messages-btn"
				} `}
				onClick={() => dispatch(changeActivePage("messages"))}
			>
				{/* button image is set in a div */}
				<div />
				<p
					className={`${
						navbar.activePage === "messages"
							? "messages-p-active"
							: "messages-p"
					} `}
				>
					Сообщения
				</p>
			</div>
			<div
				className={`${
					navbar.activePage === "services"
						? "services-btn-active"
						: "services-btn"
				} `}
				onClick={() => dispatch(changeActivePage("services"))}
			>
				{/* button image is set in a div */}
				<div />
				<p
					className={`${
						navbar.activePage === "services"
							? "services-p-active"
							: "services-p"
					} `}
				>
					Сервисы
				</p>
			</div>
		</nav>
	);
};

export default Navbar;
