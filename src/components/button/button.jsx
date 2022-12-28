import React from 'react';
import {
	BaseButton,
	ButtonSpinner,
	GoogleSignInButton,
	InvertedButton,
} from './button.styles.jsx';

const BUTTON_CLASSES_TYPES = {
	google: GoogleSignInButton,
	inverted: InvertedButton,
	default: BaseButton,
};

const Button = ({ children, isLoading, classType, ...others }) => {
	const BtnContainer = BUTTON_CLASSES_TYPES[classType];
	return (
		<BtnContainer disabled={isLoading} {...others}>
			{isLoading ? <ButtonSpinner /> : children}
		</BtnContainer>
	);
};

export default Button;
