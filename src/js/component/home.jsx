import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ControlledInput from "./ControlledInput.jsx";
import UnControlledInput from "./UnControlledInput.jsx";

//create your first component
const Home = () => {
	const [on, setOn] = useState(true)
	console.log('Render Home Component');
	return (
		<>
			{on ? 
			(<>
				<button onClick={() => setOn(false)}>Show</button>
			   	<ControlledInput />
			</>
			) : (
			<>
				<button onClick={() => setOn(true)} >Hide</button>
				<UnControlledInput/>
			</>
			)}
		</>
	);
};

export default Home;
