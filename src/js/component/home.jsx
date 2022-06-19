import React from "react";
import Counter from "./Counter.jsx";

const Home = (props) => {
	return (
		<>
			<div className="position-absolute top-50 start-50 translate-middle d-block">
				<Counter seconds={props.seconds} />
				<div>
					<button
						className="btn btn-sm btn-light position-relative top-50 start-50 translate-middle"
						onClick={props.restart}>
						Restart
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
