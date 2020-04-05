import React, { FC } from "react";
import { ProgressBar } from "react-materialize";

import { Skill } from "types";

interface Props {
	skills: Array<Skill>;
}

export const Skills: FC<Props> = ({ skills }) => {
	return (
		<div className="col l12 m12 s12  skills sidebar-item">
			<div className="row">
				<div className="col m12 l3 s12 icon">
					<i className="fa fa-calendar-o"></i>
				</div>
				<div className="col m12 l9 s12 skill-line a5 wow fadeIn" data-wow-delay="0.5s">
					<h3>Core Professional Skills </h3>

					{skills.filter(item => item.showInSideBar).map((item, idx) => {
						return (
							<div key={idx} className="skill-line">
								<span>{item.name}</span>
								<ProgressBar progress={item.scale}/>
								{item.experiance}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
