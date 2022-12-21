import styled from 'styled-components';

export const MainNavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100px;
	width: 100%;
	margin-bottom: 25px;
`;

export const LogoContainer = styled.span`
	padding: 15px 20px;
`;

export const NavLinksContainer = styled.ul`
	padding-left: 0;
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NavLinkContainer = styled.li`
	padding: 15px 20px;
	font-size: 1.2rem;
	font-weight: 500;
	color: #4a4a4a;
	cursor: pointer;

	&:hover {
		color: #000;
		text-decoration: underline;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;

export const activeStyle = {
	color: '#000',
	textDecoration: 'underline',
};
