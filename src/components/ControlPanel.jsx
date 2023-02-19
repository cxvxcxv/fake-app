import React from "react";
import "./ControlPanel.css";

const ControlPanel = () => {
	return (
		<section>
			<div className="btns">
				<div>
					<span className="qr" />
					<p>Kaspi QR</p>
				</div>
				<div>
					<span className="bank" />
					<p>Мой Банк</p>
				</div>
				<div>
					<span className="payments" />
					<p>Платежи</p>
				</div>
				<div>
					<span className="transfers" />
					<p>Переводы</p>
				</div>
				<div>
					<span className="shop" />
					<p>Магазин</p>
				</div>
				<div>
					<span className="travel" />
					<p>Travel</p>
				</div>
				<div>
					<span className="gov" />
					<p>Госуслуги</p>
				</div>
				<div>
					<span className="ads" />
					<p>Объявления</p>
				</div>
			</div>

			<div className="magnum">
				<div className="info-container">
					<img
						src="https://imgur.com/BWClCLN.png"
						alt=""
						width={35}
						height={35}
					/>
					<div>
						<h6>Magnum</h6>
						<p>Продукты питания с бесплатной доставкой </p>
					</div>
				</div>
				{/* arrow icon */}
				<span />
			</div>

			<div>
				<div className="money-offers-container">
					<div className="moc-item">
						<img src="https://imgur.com/Rt1JKoG.png" alt="" />
						<div>
							<h6>Kaspi Red</h6>
							<p>Рассрочка 0%</p>
						</div>
					</div>
					<div className="moc-item">
						<img src="https://imgur.com/G8UgYTO.png" alt="" />
						<div>
							<h6>Kaspi Депозит</h6>
							<p>Эффективная ставка 15%</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ControlPanel;
