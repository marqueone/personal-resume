import React, { FC, useState, Fragment } from "react";
import { EmploymentProject } from "types";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

interface Props {
	projects: Array<EmploymentProject>;
}

export const Projects: FC<Props> = ({ projects }) => {
	return (
		<div className="section-wrapper z-depth-1">
			<div className="section-icon col s12 m12 l2">
				<i className="fa fa-tools"></i>
			</div>
			<div className="custom-content col s12 m12 l10 wow fadeIn a1">
				<h2>Projects </h2>
				{projects.map((item, idx) => {
					return (
						<div className="custom-content-wrapper wow fadeIn a2" key={idx}>
							<h3>
								<span>{item.name}</span>: {item.role}
							</h3>
							Technologies Used:
							<ul className="technology">
								{item.technology.map((tech, idx) => {
									return <li key={idx}>{tech}</li>;
								})}
							</ul>
							{/* <p className="description">{item.description}</p> */}
							<ProjectDetails description={item.description} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

interface DetailsProps {
	description?: string;
}

const ProjectDetails: FC<DetailsProps> = ({ description }) => {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = (): void => {
		setIsOpen(!isOpen);
	};

	const displayDescription = (description?: string) => {
		return (
			<Fragment>
				<p className="description">{description}</p>
				<div className="hide-description">Hide Description</div>
			</Fragment>
		);
	};

	return (
		<span onClick={() => onOpen()}>
			{isOpen ? displayDescription(description) : <div className="show-description">Show Description</div>}
		</span>
	);
};
