import React, { FC } from "react";
import withLayout from "components/layout";

import { WorkExperiance, EducationExperiance, Projects } from "components/tiles";
import experiance from "data/mock.work-experiance.json";
import education from "data/mock.education.json";

const Resume: FC = () => {
    const projects = experiance.filter(item => { return item.projects }).map(item => { return item.projects}).flat();
    
    return (
		<section className="col s12 m12 l8 section">
			<div className="row">
                <WorkExperiance experiance={experiance} />
                <Projects projects={projects}/>
                <EducationExperiance education={education}/>
            </div>
		</section>
	);
};

export default withLayout(Resume);