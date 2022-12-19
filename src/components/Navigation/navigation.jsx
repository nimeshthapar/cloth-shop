import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as TshirtIcon } from '../../assets/shopping-bag.svg';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';
import { UserContext } from '../../store/user-context';
import { signOutUser } from '../../util/firebase.util';
import './navigation.styles.scss';

const Navigation = () => {
	let activeStyle = {
		color: '#000',
		textDecoration: 'underline',
	};

	const { user } = useContext(UserContext);

	return (
		<>
			<nav className="main-nav">
				<span className="logo">
					<NavLink to="/">
						<TshirtIcon width={'3rem'} height={'3rem'} />
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
					<li>
						<NavLink
							to="cart"
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							<CartIcon width={'2rem'} height={'2rem'} />
						</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Navigation;
