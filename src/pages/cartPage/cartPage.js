import styles from "./cartPage.module.css"
import { getCartItems } from "../../data/data"
import pageContainerStyles from "../../pageContainer.module.css"
import { CartItemCard } from '../../components/cartItemCard/cartItemCard';
import { SiteCeiling } from '../../components/ceiling/siteCeiling';
import { SiteFooter } from '../../components/footer/siteFooter';
import { CartTotal } from './cartTotal/cartTotal';
import { useCallback, useEffect, useState } from "react";

export const CartPage = () => {

	const [items, setItems] = useState([]);

	// TODO: сейчас этот вариант порождает бесконечный луп рендера, но я не нашёл как это пофиксить, чтобы счетчики обновлялись динамически
	useEffect(() => {
		setItems(getCartItems());
	}, window.sessionStorage.cartItems ? JSON.parse(window.sessionStorage.cartItems) : [])

	return (
		<div className={pageContainerStyles.pageContainer}>
			<SiteCeiling />
			<div className={styles.content}>
				<div className={styles.itemsBlock}>
				{
					items.map(item =>
						<CartItemCard
							item={item}
						/>
					)
				}
				</div>
				<CartTotal totalSum={items.reduce((total, item) => total + item.count * item.itemPrice, 0)} />
			</div>
			<SiteFooter />
		</div>
	);
};