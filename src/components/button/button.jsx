import React from 'react';
import './button.styles.scss';

const BUTTON_CLASSES_TYPES = {
	google: 'google-sign-in',
	inverted: 'inverted',
	default: 'default',
};

const Button = ({ children, classType, ...others }) => {
	return (
		<button
			className={`button-container ${BUTTON_CLASSES_TYPES[classType]}`}
			{...others}
		>
			{children}
		</button>
	);
};

export default Button;
