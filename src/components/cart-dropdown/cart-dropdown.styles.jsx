import styled from 'styled-components';

export const CartDropDownContainer = styled.div`
	position: absolute;
	width: 280px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	button {
		margin-top: auto;
	}
`;

export const EmptyMessage = styled.h2`
	font-size: 18px;
	margin: 50px auto;
	color: darkgrey;
`;

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 3px;
	}

	&::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
	}
`;
