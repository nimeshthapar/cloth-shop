import styled from 'styled-components';

export const ErrorPageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;

	h2 {
		color: darkgrey;
		margin: 5px 0;
	}

	a {
		text-decoration: none;
		color: darkgrey;
		&:hover {
			color: #000;
		}
	}
`;

export const ImgContainer = styled.div`
	height: 200px;
	width: 200px;
	object-fit: cover;
	border: 4px solid darkgray;
	border-radius: 50%;
	overflow: hidden;

	img {
		height: 100%;
		width: 100%;
	}
`;
