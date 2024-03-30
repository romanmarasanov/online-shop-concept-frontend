import styles from "./siteCeiling.module.css"
import favoritesIcon from "../../assets/icons/Like.svg"
import cartIcon from "../../assets/icons/Cart.svg"

export const SiteCeiling = () => {
	return (
		<div className={styles.container}>
			<div className={styles.serviceTitleBlock}>
				<span className={styles.serviceTitle}>QPICK</span>
			</div>
			<div className={styles.iconsBlock}>
				<div className={styles.iconBlock}>
					<img className={styles.favoritesIcon.icon + " " + styles.icon} src={favoritesIcon} alt={"favorites"} aria-label="favorites items" />
				</div>
				<div className={styles.iconBlock}>
					<img className={styles.cartIcon + " " + styles.icon} src={cartIcon} alt={"cart"} aria-label="cart" />
				</div>
			</div>
		</div>
	);
};