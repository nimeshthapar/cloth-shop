import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';

export const CartIconContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const CartSvgComponent = styled(ShoppingIcon)`
	width: 32px;
	height: 32px;
`;

export const ItemCount = styled.span`
	position: absolute;
	font-size: 12px;
	font-weight: bold;
	bottom: 12px;
`;
