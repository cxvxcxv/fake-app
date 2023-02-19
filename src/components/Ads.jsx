import "./Ads.css";

const Ads = props => {
	let position = props.position;
	if (position === "top") {
		return (
			<section className="ads-top-container">
				<img
					src="https://static.cdn-kaspi.kz/mrk/nrj/may22/Offline_promo/23-29/Meb12/landing/mlp-ru_424402.png"
					alt=""
				/>
				<img
					src="https://fora.kz/images/content/actions/rassrocka-0-0-24-ot-kaspi-na-komputery_603cdea21de20.jpg"
					alt=""
				/>
				<img
					src="https://static.cdn-kaspi.kz/mrk/Daulet_mrk/1306/mebel0012/mlp/mlp-ru_485478.png"
					alt=""
				/>
				<img
					src="https://fora.kz/images/content/actions/rassrocka-0-0-24-ot-kaspi_6119137cb5662.jpg"
					alt=""
				/>
				<img
					src="https://divan24.kz/wp-content/uploads/2021/03/rassroka-0024-1024x620.jpg"
					alt=""
				/>
				<img
					src="https://static.cdn-kaspi.kz/mrk/Daulet_mrk/003005/0012/land/mlp-ru_250704.png"
					alt=""
				/>
			</section>
		);
	}
	if (position === "middle") {
		return (
			<div className="ads-middle-container">
				<img
					src="https://fora.kz/images/content/actions/rassrocka-0-0-12-s-kaspi_5f645588b78af.jpg"
					alt=""
				/>
				<img
					src="https://fora.kz/images/content/actions/rassrocka-0-0-24-ot-kaspi-na-produkciu-apple_60ab3908ed311.jpg"
					alt=""
				/>
				<img
					src="https://fora.kz/images/content/actions/rassrocka-0-0-12-s-kaspi_5cca87514f83e.jpg"
					alt=""
				/>
			</div>
		);
	}
	if (position === "bottom") {
		return (
			<section className="ads-bottom-container">
				<h4>Вас могут заинтересовать</h4>
				<div className="loading-animation">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</section>
		);
	}
};

export default Ads;

//
//
