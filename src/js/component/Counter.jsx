import React from "react";
import { BsFillClockFill } from "react-icons/bs";

const Counter = (props) => {
	return (
		<>
			<div className="fs-1 p-5 neon">
				<BsFillClockFill className="fs-3" />
				<span className="ps-3">{props.seconds}</span>
			</div>
		</>
	);
};

export default Counter;
