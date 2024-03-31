import styles from "./siteCeiling.module.css"
import favoritesIcon from "../../assets/icons/Like.svg"
import cartIcon from "../../assets/icons/Cart.svg"
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const SiteCeiling = () => {

	useEffect(() => {

	}, [])

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
							2
						</div>
					</Link>
				</div>
				<div className={styles.iconBlock}>
					<Link to='/cart'>
						<img className={styles.cartIcon + " " + styles.icon} src={cartIcon} alt={"cart"} aria-label="cart" />
						<div className={styles.counter}>
							1
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};