import React, { ChangeEvent, useState } from "react";
import { IDynamicFormComponent } from "./types";
import { SimplePopover } from "../SimplePopover";
import { mockData } from "../../../mocks/apiMock";
import "./styles.scss";

export const DynamicFormComponent: IDynamicFormComponent = () => {
	const [hasMistake, setHasMistake] = useState(false);
	const [compDescVal, setCompDescVal] = useState<any>(<></>);
	const [fieldMistake, setFieldMistake] = useState(mockData[1].message);
	const [showFM, setShowFM] = useState(false);
	const [wordMistake, setWordMistake] = useState(mockData[0].message);
	const [showWM, setShowWM] = useState(false);

	const handleWordMouseEnter = () => {
		setShowFM(false);
		setShowWM(true);
		setCompDescValue(true);
	};

	const handleWordMouseLeave = () => {
		setShowFM(true);
		setShowWM(false);
		setCompDescValue(false);
	};

	const setCompDescValue = (open: boolean) => {
		open
			? setCompDescVal(
					<>
						I've done{" "}
						<span
							className="error-background"
							onMouseEnter={handleWordMouseEnter}
							onMouseLeave={handleWordMouseLeave}>
							<>{`many projects`}</>
						</span>
						<div className="custom-tooltip">
							<div className="custom-tooltip__header">
								Content Improvement
							</div>
							<div className="custom-tooltip__body">
								{wordMistake}
							</div>
						</div>
					</>
			  )
			: setCompDescVal(
					<>
						I've done{" "}
						<span
							className="error-background"
							onMouseEnter={handleWordMouseEnter}
							onMouseLeave={handleWordMouseLeave}>
							<>{`many projects`}</>
						</span>
					</>
			  );
	};

	const handleCompDescChange = (e: any) => {
		setCompDescVal(e.currentTarget.textContent);
		if (e.currentTarget.textContent.includes("I've done many projects")) {
			setShowFM(true);
			setCompDescValue(false);
			setHasMistake(true);
		} else {
			setHasMistake(false);
			setShowFM(false);
		}
	};

	return (
		<div className="dynamic-form mb-3">
			<h3 className="dynamic-form__title">EXPERIENCE</h3>
			<form className="experience-form">
				<div
					className="experience-form__title p-1 m-1"
					contentEditable={true}
					suppressContentEditableWarning={true}
					data-placeholder="Title"
				/>
				<div
					className="experience-form__company-name p-1 m-1"
					contentEditable={true}
					suppressContentEditableWarning={true}
					data-placeholder="Company Name"
				/>
				<div
					className="experience-form__date p-1 m-1"
					contentEditable={true}
					suppressContentEditableWarning={true}
					data-placeholder="Date period New York, NY"
				/>
				<SimplePopover
					id="0-23"
					title={<>Content Improvement</>}
					text={fieldMistake}
					showTooltip={showFM}>
					<div
						className={`experience-form__company-desc p-1 m-1 ${
							hasMistake ? "error" : ""
						}`}
						style={{ height: "30px" }}
						contentEditable={true}
						suppressContentEditableWarning={true}
						onInput={handleCompDescChange}
						onBlur={handleCompDescChange}
						data-placeholder="Company Description">
						{(showFM || showWM) && compDescVal}
					</div>
				</SimplePopover>
			</form>
		</div>
	);
};
