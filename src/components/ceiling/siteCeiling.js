import styles from "./siteCeiling.module.css"
import favoritesIcon from "../../assets/icons/Like.svg"
import cartIcon from "../../assets/icons/Cart.svg"
import { getCounters } from "../../data/data"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const SiteCeiling = () => {

	const [counters, setCounters] = useState({favorites: 0, cart: 0});

		// TODO: сейчас этот вариант порождает бесконечный луп рендера, но я не нашёл как это пофиксить, чтобы счетчики обновлялись динамически
	useEffect(() => {
		setCounters(getCounters());
	}, window.sessionStorage.cartItems ? JSON.parse(window.sessionStorage.cartItems) : [])

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