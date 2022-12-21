import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorPageContainer, ImgContainer } from './error.styles';

const ErrorPage = () => {
	return (
		<ErrorPageContainer>
			<ImgContainer>
				<img
					src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg"
					alt="404"
				/>
			</ImgContainer>
			<h2>Route can't be Reached</h2>
			<Link to="/">Home</Link>
		</ErrorPageContainer>
	);
};

export default ErrorPage;
