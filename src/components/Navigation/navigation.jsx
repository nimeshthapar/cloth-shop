import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/shopping-bag.svg';
import CartIcon from '../cart-icon/cart-icon';
import {
	MainNavContainer,
	LogoContainer,
	NavLinksContainer,
	NavLinkContainer,
	activeStyle,
} from './navigation.styles.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { signOutStart } from '../../store/user/user.actions';

const Navigation = () => {
	const user = useSelector((state) => state.user.user);
	const showCart = useSelector((state) => state.cart.showCart);
	const dispatch = useDispatch();

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
						<NavLinkContainer
							onClick={() => dispatch(signOutStart())}
						>
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
