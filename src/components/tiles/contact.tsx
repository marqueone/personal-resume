import React, { FC } from "react";
import { FontAwesome } from "types";

interface Props {
	icon: FontAwesome;
	contacts: Array<ContactType>;
}

interface ContactType {
	type: string;
	name: string;
	value: string;
}

export const Contact: FC<Props> = ({ icon, contacts }) => {
	const contactType = (type: string, value: string): string => {
		let result = "";

        switch (type.toLowerCase()) {
			case "phone":
                result = `tel:${value}`;
                break
			case "email":
                result = `mailto:${value}`;
                break;
		}

		return result;
	};

	return (
		<div className="col l12 m12 s12  mobile sidebar-item">
			<div className="row">
				<div className="col m12 s12 l3 icon">
					<i className={`${icon.prefix} ${icon.size && `fa-${icon.size}`} ${icon.name}`}></i>
				</div>
				<div className="col m12 s12 l9 info wow fadeIn a2" data-wow-delay="0.2s">
					<div className="section-item-details">
						{contacts.map((contact, idx) => {
							return (
								<div key={idx} className="personal">
									<h4>
										<a href={contactType(contact.type, contact.value)}>{contact.value}</a>
									</h4>
									<span>{contact.name}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
