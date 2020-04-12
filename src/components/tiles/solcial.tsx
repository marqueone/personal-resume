import React, { FC } from "react";
import { Contact } from "types";

interface Props {
	contacts: Array<Contact>;
}

export const SocialContacts: FC<Props> = ({ contacts }) => {
	return (
		<div className="col l12 m12 s12  skills sidebar-item">
			<div className="row">
				<div className="col m12 l3 s12 icon">
					<i className="fas fa-2x fa-hashtag"></i>
				</div>
				<div className="col m12 l9 s12 skill-line a5 wow fadeIn" data-wow-delay="0.5s">
					<h3>Social Media</h3>

					{contacts
						.map((item, idx) => {
							return (
								<div key={idx} >
									<i className={item.icon}></i> <a href={item.url}>{item.label}</a>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
