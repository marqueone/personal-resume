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
							insert something here about me, no doubt this will be the last thing I update. 
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};