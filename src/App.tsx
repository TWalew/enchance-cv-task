import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { DynamicFormComponent } from "./components/Shared/DynamicFormComponent";
import { Button, Col, Container, Row } from "react-bootstrap";

const App = () => {
	const [experiences, setExperiences] = useState([<DynamicFormComponent />]);

	const onAddExp = () => {
		setExperiences([...experiences, <DynamicFormComponent />]);
	};

	return (
		<div className="App">
			<Container>
				<Row>
					<Col sm={2}>
						<Button className="green-btn my-4" onClick={onAddExp}>
							Add New Entry
						</Button>
					</Col>
				</Row>

				{experiences.map((exp, index) => (
					<Row key={`dynamic-exp${index}`}>
						<Col sm={6}>{exp}</Col>
					</Row>
				))}
			</Container>
		</div>
	);
};

export default App;
