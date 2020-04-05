import React, { FC } from "react";
import { Education } from "types";

interface Props {
	education: Array<Education>;
}

export const EducationExperiance: FC<Props> = ({ education }) => {
	return (
		<div className="section-wrapper z-depth-1">
			<div className="section-icon col s12 m12 l2">
				<i className="fa fa-graduation-cap"></i>
			</div>
			<div className="custom-content col s12 m12 l10 wow fadeIn a1">
				<h2>Education </h2>

				{education.map((item, idx) => {
					return (
						<div className="custom-content-wrapper wow fadeIn a2">
							<h3>
								<span>{item.school}</span>: {item.program}
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
