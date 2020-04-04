import React, { ComponentType, ReactElement } from "react";

import { Profile, About, Contact, Skills } from "components/tiles";
import skills from "data/mock.skills.json";

const withLayout = <T extends object>(Wrapped: ComponentType<T>) => (props: T): ReactElement => {
	const phoneNumbers = [{ type: "phone", name: "mobile", value: "416-400-6718" }];
	const emailAddresses = [
		{ type: "email", name: "personal", value: "mike.sears@maiku.net" },
		{ type: "email", name: "freelance", value: "mike.sears@marqueone.net" }
	];
	const address = [{ type: "home", name: "V8V1V0", value: "Victoria, BC" }];

	return (
		<div className="container">
			<div className="row">
				{/* =========================================
                           SIDEBAR   
                    ========================================= */}
				<aside className="col l4 m12 s12 sidebar z-depth-1" id="sidebar">
					<div className="row">
						<div className="heading">
							{/* =======================================
                                      NAVIGATION   
                                ======================================= */}
							<div className="nav-icon">
								{/* <nav>
                                <div className="nav-wrapper">
                                    <ul id="nav-mobile" className="side-nav">
                                        <li><a href="index.html">Resume</a></li>
                                        <li><a href="project.html">Projects</a></li>
                                        <li><a href="cover-latter.html">Cover Latter</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                    <a href="#" data-activates="nav-mobile" className="button-collapse  "><i
                                            className="mdi-navigation-menu"></i></a>
                                </div>
                            </nav> */}
							</div>
							<Profile name="Mike Sears" position="Senior .NET Developer" />
						</div>
						<About />
						{/* MOBILE NUMBER */}
						<Contact icon={{ prefix: "fas", name: "fa-mobile-alt", size: "2x" }} contacts={phoneNumbers} />
						{/* EMAIL  */}
						<Contact icon={{ prefix: "far", name: "fa-envelope", size: "2x" }} contacts={emailAddresses} />
						{/* ADDRESS */}
						<Contact icon={{ prefix: "fas", name: "fa-home", size: "2x" }} contacts={address} />
						{/* SKILLS */}
						<Skills skills={skills.filter(skill => skill.core)} />
					</div>
				</aside>
				<Wrapped {...props} />
			</div>
		</div>
	);
};

export default withLayout;
