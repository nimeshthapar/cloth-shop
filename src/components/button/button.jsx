import React from 'react';
import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from './button.styles.jsx';

const BUTTON_CLASSES_TYPES = {
	google: GoogleSignInButton,
	inverted: InvertedButton,
	default: BaseButton,
};

const Button = ({ children, classType, ...others }) => {
	const BtnContainer = BUTTON_CLASSES_TYPES[classType];
	return <BtnContainer {...others}>{children}</BtnContainer>;
};

export default Button;
