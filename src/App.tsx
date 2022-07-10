import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { DynamicFormComponent } from "./components/Shared/DynamicFormComponent";
import { Button, Container } from "react-bootstrap";

const App = () => {
	const [experiences, setExperiences] = useState([<DynamicFormComponent />]);

	const onAddExp = () => {
		console.log("push");
		setExperiences([...experiences, <DynamicFormComponent />]);
		console.log(experiences);
	};

	return (
		<div className="App">
			<Container>
				<>
					<Button className="green-btn my-4" onClick={onAddExp}>
						Add New Entry
					</Button>
					{experiences.map((exp, index) => (
						<React.Fragment key={`dynamic-exp${index}`}>
							{exp}
						</React.Fragment>
					))}
				</>
			</Container>
		</div>
	);
};

export default App;
