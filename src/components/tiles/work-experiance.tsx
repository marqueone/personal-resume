import React, { FC } from "react";
import { Employment } from "types";

interface Props {
	experiance: Array<Employment>;
}

export const WorkExperiance: FC<Props> = ({ experiance }) => {
	return (
		<div className="section-wrapper z-depth-1">
			<div className="section-icon col s12 m12 l2">
				<i className="fa fa-suitcase"></i>
			</div>
			<div className="custom-content col s12 m12 l10 wow fadeIn a1" data-wow-delay="0.1s">
				<h2>Work Experience</h2>

				{experiance.map((item, idx) => {
					return (
						<div className="custom-content-wrapper wow fadeIn a2" data-wow-delay="0.2s" key={idx}>
							<h3>
								<span>{item.company}</span>: {item.position}
							</h3>
							<span>
								{`${item.start}`} {item.end ? `- ${item.end}` : "Current"}
							</span>
							<p>{item.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
