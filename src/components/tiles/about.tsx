import React, { FC } from "react";

export const About: FC = () => {
	return (
		<div className="col l12 m12 s12 sort-info sidebar-item">
			<div className="row">
				<div className="col m12 s12 l3 icon">
					<i className="fa fa-user"></i>
				</div>
				<div className="col m12 s12 l9 info wow fadeIn a1" data-wow-delay="0.1s">
					<div className="section-item-details">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
							et dolore magna aliqua . Ld do eiusmod tempor incididunt ut labore et dolore magna aliqua
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};