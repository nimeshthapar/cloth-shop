import React, { useState } from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, inputdata }) => {
	const [val, setVal] = useState('');
	const changeHandler = (e) => {
		setVal(e.target.value);
	};
	return (
		<div className="group">
			<label className={`${val ? 'shrink' : ''} form-input-label`}>
				{label}
			</label>
			<input
				className="form-input"
				{...inputdata}
				onChange={changeHandler}
				value={val}
			/>
		</div>
	);
};

export default FormInput;
