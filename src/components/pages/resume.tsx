import React, { FC } from "react";
import withLayout from "components/layout";

import { WorkExperiance, EducationExperiance } from "components/tiles";
import experiance from "data/mock.work-experiance.json";
import education from "data/mock.education.json";

const Resume: FC = () => {
	return (
		<section className="col s12 m12 l8 section">
			<div className="row">
                <WorkExperiance experiance={experiance} />
                <EducationExperiance education={education}/>
            </div>
		</section>
	);
};

export default withLayout(Resume);
