import React, { useContext, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/shopping-bag.svg';
import CartIcon from '../cart-icon/cart-icon';
import { UserContext } from '../../store/user-context';
import { signOutUser } from '../../util/firebase.util';
import './navigation.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Navigation = () => {
	let activeStyle = {
		color: '#000',
		textDecoration: 'underline',
	};

	const { user } = useContext(UserContext);
	const [showCartDropDown, setShowCartDropDown] = useState(false);

	const cartIconClickHandler = () => {
		setShowCartDropDown((prev) => !prev);
	};

	return (
		<>
			<nav className="main-nav">
				<span className="logo">
					<NavLink to="/">
						<LogoIcon width={'3rem'} height={'3rem'} />
					</NavLink>
				</span>
				<ul className="nav-links">
					<li>
						<NavLink
							to="shop"
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							SHOP
						</NavLink>
					</li>
					{user === null ? (
						<li>
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
						</li>
					) : (
						<li onClick={signOutUser}>SIGN OUT</li>
					)}
					<li onClick={cartIconClickHandler}>
						<CartIcon width={'2rem'} height={'2rem'} />
					</li>
				</ul>
			</nav>
			{showCartDropDown && <CartDropdown />}
			<Outlet />
		</>
	);
};

export default Navigation;
