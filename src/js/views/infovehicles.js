import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/details.scss";

export const InfoVehicles = () => {
	return (
		<div className="container section new">
			<div className="row">
				<div className="col-lg-6 col-12 details-content">
					<img
						src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
						className="details-img"
					/>
				</div>
				<div className="col-lg-6 col-12 details-content">
					<h4 className="details-title mb-3">Title</h4>
					<div className="details-description">
						<p className="mb-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
