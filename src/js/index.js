//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let counter = 0;

function restart() {
	counter = 0;
}

setInterval(() => {
	let seconds = counter.toString().padStart(5, "0");
	counter++;

	ReactDOM.render(
		<Home seconds={seconds} restart={restart} />,
		document.querySelector("#app")
	);
}, 1000);
