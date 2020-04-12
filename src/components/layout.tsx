import React, { ComponentType, ReactElement } from "react";

import { Profile, About, Contact, Skills, SocialContacts } from "components/tiles";
import skills from "data/mock.skills.json";
import profile from "data/mock.profile.json";

const withLayout = <T extends object>(Wrapped: ComponentType<T>) => (props: T): ReactElement => {
	const phoneNumbers = [{ type: "phone", name: "mobile", value: "416-400-6718" }];
	const emailAddresses = [
		{ type: "email", name: "personal", value: "mike.sears@maiku.net" },
		{ type: "email", name: "freelance", value: "mike.sears@marqueone.net" },
	];

	const contacts = [
		{ label: "LinkedIn", url: "https://www.linkedin.com/in/mike-sears-7935b612/", icon: "fab fa-linkedin" },
		{ label: "Skype", url: "skype:mike-sears", icon: "fab fa-skype" },
		{ label: "Facebook", url: "https://www.facebook.com/Jaxom", icon: "fab fa-facebook-square" },
		{ label: "Instagram", url: "https://www.instagram.com/marqueone.ca/", icon: "fab fa-instagram" },
	];

	return (
		<div className="container">
			<div className="row">
				{/* =========================================
                           SIDEBAR   
                    ========================================= */}
				<aside className="col l4 m12 s12 sidebar z-depth-1" id="sidebar">
					<div className="row">
						<div className="heading">
							<Profile name="Mike Sears" position="Senior .NET Developer" />
						</div>
						<About profile={profile} />
						{/* MOBILE NUMBER */}
						<Contact icon={{ prefix: "fas", name: "fa-mobile-alt", size: "2x" }} contacts={phoneNumbers} />
						{/* EMAIL  */}
						<Contact icon={{ prefix: "far", name: "fa-envelope", size: "2x" }} contacts={emailAddresses} />
						{/* SKILLS */}
						<Skills skills={skills} />
						<SocialContacts contacts={contacts} />
					</div>
				</aside>
				<Wrapped {...props} />
			</div>
		</div>
	);
};

export default withLayout;
