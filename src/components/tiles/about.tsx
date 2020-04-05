import React, { FC } from "react";
import { Profile } from "types";

interface Props {
	profile: Profile;
}

export const About: FC<Props> = ({ profile }) => {
	const { about, items } = profile;
	return (
		<div className="col l12 m12 s12 sort-info sidebar-item">
			<div className="row">
				<div className="col m12 s12 l3 icon">
					<i className="fa fa-user"></i>
				</div>
				<div className="col m12 s12 l9 info wow fadeIn a1" data-wow-delay="0.1s">
					<div className="section-item-details">
						<p>{about}</p>

                        <ul>
                            {items.map((item, idx) => { 
                                return (<li key={idx}><span>{item.label}</span>: {item.value}</li>);
                            })}
                        </ul>
					</div>
				</div>
			</div>
		</div>
	);
};
