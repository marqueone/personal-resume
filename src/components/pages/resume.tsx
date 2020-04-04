import React, { FC, Fragment } from "react";
import withLayout from "components/layout";

import { WorkExperiance, Education } from "components/tiles";
import experiance from "data/mock.work-experiance.json";

const Resume: FC = () => {
	return (
		<section className="col s12 m12 l8 section">
			<div className="row">
                <WorkExperiance experiance={experiance} />
                <Education />
            </div>
		</section>
	);
};

export default withLayout(Resume);
