import React from "react";
import { IDynamicFormComponent } from "./types";
import "./styles.scss";

export const DynamicFormComponent: IDynamicFormComponent = () => {
	return (
		<div className="dynamic-form mb-3">
			<h3 className="dynamic-form__title">EXPERIENCE</h3>
			<form className="experience-form">
				<input
					className="experience-form__title"
					type="text"
					placeholder="Title"
				/>
				<input
					className="experience-form__company-name"
					type="text"
					placeholder="Company Name"
				/>
				<input
					className="experience-form__date"
					type="text"
					placeholder="Date period New York, NY"
				/>
				<textarea
					rows={4}
					cols={50}
					className="experience-form__company-desc"
					placeholder="Company Description"></textarea>
			</form>
		</div>
	);
};
