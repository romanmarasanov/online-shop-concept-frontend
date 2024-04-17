import styles from "./siteCeiling.module.css"
import favoritesIcon from "../../assets/icons/Like.svg"
import cartIcon from "../../assets/icons/Cart.svg"
import { Link } from "react-router-dom";

export const SiteCeiling = ( {cart} ) => {

	const counters = {favorites: 0, cart: cart ? cart.reduce((count, current) => count + current.count, 0) : 0};

	return (
		<div className={styles.container}>
			<div className={styles.serviceTitleBlock}>
				<span className={styles.serviceTitle}>QPICK</span>
			</div>
			<div className={styles.iconsBlock}>
				<div className={styles.iconBlock}>
					<Link to='/favorites'>
						<img className={styles.favoritesIcon.icon + " " + styles.icon} src={favoritesIcon} alt={"favorites"} aria-label="favorites items" />
						<div className={styles.counter}>
							{counters.favorites}
						</div>
					</Link>
				</div>
				<div className={styles.iconBlock}>
					<Link to='/cart'>
						<img className={styles.cartIcon + " " + styles.icon} src={cartIcon} alt={"cart"} aria-label="cart" />
						<div className={styles.counter}>
						{counters.cart}
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};