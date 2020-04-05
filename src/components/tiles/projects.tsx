import React, { FC } from "react";
import { EmploymentProject } from "types";

interface Props {
	projects: Array<EmploymentProject>;
}

export const Projects: FC<Props> = ({ projects }) => {
	return (
		<div className="section-wrapper z-depth-1">
			<div className="section-icon col s12 m12 l2">
				<i className="fa fa-graduation-cap"></i>
			</div>
			<div className="custom-content col s12 m12 l10 wow fadeIn a1">
				<h2>Projects </h2>

				{projects.map((item, idx) => {
					return (
						<div className="custom-content-wrapper wow fadeIn a2" key={idx}>
							<h3>
								<span>{item.name}</span>: {item.role}
							</h3>
							Technoloies Used: <span>{item.technology}</span>
                    <p style={{display:"none"}}>{item.description}</p>
							{/* <span>
                        {`${item.start}`} {item.end ? `- ${item.end}` : "Current"}
                    </span>
                    <p>{item.description}</p> */}
						</div>
					);
				})}
			</div>
		</div>
	);
};
