import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/shopping-bag.svg';
import CartIcon from '../cart-icon/cart-icon';
import { UserContext } from '../../store/user-context';
import { signOutUser } from '../../util/firebase.util';
import {
	MainNavContainer,
	LogoContainer,
	NavLinksContainer,
	NavLinkContainer,
	activeStyle,
} from './navigation.styles.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { CartContext } from '../../store/cart-context';
const Navigation = () => {
	const { user } = useContext(UserContext);
	const { showCart } = useContext(CartContext);

	return (
		<>
			<MainNavContainer>
				<LogoContainer>
					<NavLink to="/">
						<LogoIcon width={'3rem'} height={'3rem'} />
					</NavLink>
				</LogoContainer>
				<NavLinksContainer>
					<NavLinkContainer>
						<NavLink
							to="shop"
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							SHOP
						</NavLink>
					</NavLinkContainer>
					{user === null ? (
						<NavLinkContainer>
							{
								<NavLink
									to="auth"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									SIGN IN
								</NavLink>
							}
						</NavLinkContainer>
					) : (
						<NavLinkContainer onClick={signOutUser}>
							SIGN OUT
						</NavLinkContainer>
					)}
					<NavLinkContainer>
						<CartIcon width={'2rem'} height={'2rem'} />
					</NavLinkContainer>
				</NavLinksContainer>
			</MainNavContainer>
			{showCart && <CartDropdown />}
			<Outlet />
		</>
	);
};

export default Navigation;
