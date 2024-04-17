import styles from "./cart.module.css"
import { CartItemCard } from '../../components/cartItemCard/cartItemCard';
import { CartTotal } from './cartTotal/cartTotal';
import { useOutletContext } from "react-router-dom";

export const Cart = ( ) => {
	
	const parentParams = useOutletContext();
	const items = parentParams.cartItems;

	return (
		<div className={styles.content}>
			<div className={styles.itemsBlock}>
				{
					items.map(item =>
						<CartItemCard
							key={item.id}
							item={item}
							onCartChange={parentParams.onCartChange}
						/>
					)
				}
			</div>
			<CartTotal totalSum={items.reduce((total, item) => total + item.count * item.itemPrice, 0)} />
		</div>
	);
};

export default Cart;