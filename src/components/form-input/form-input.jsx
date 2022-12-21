import React, { useState } from 'react';
import { FormInputLabel, Group, Input } from './form-input.styles';

const FormInput = ({ label, inputdata }) => {
	const [val, setVal] = useState('');
	const changeHandler = (e) => {
		setVal(e.target.value);
	};
	return (
		<Group>
			<FormInputLabel shrink={val.length > 0}>{label}</FormInputLabel>
			<Input {...inputdata} onChange={changeHandler} value={val} />
		</Group>
	);
};

export default FormInput;
