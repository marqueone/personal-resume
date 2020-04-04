import React, { FC } from "react";
import defaultProfileImage from "assets/images/profile-img.jpg";

interface Props {
	name: string
    position: string
    profileImage?: string
}

export const Profile: FC<Props> = ({ name, position, profileImage }) => {
	return (
		<div className="profile">
			<div className="feature-img">
				<a href="index.html">
					<img src={profileImage || defaultProfileImage} className="responsive-img" alt="" />
				</a>
			</div>
			<div className="title col s12 m12 l9 right  wow fadeIn" data-wow-delay="0.1s">
				<h2>{name}</h2>
				<span>{position}</span>
			</div>
		</div>
	);
};
