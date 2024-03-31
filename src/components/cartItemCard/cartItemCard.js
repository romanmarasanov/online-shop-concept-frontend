import styles from "./cartItemCard.module.css"
import deleteIcon from "../../assets/icons/Delete.svg"
import minusIcon from "../../assets/icons/Minus.svg"
import plusIcon from "../../assets/icons/Vector.svg"
import { addCartItem } from "../../data/data";

export const CartItemCard = ({ item }) => {
	
	const addItem = () => {
		addCartItem(item, 1);
	}

	const removeItem = () => {
		addCartItem(item, -1);
	}
	
	return (
		<div className={styles.container}>
			<div className={styles.itemImageCounterBlock}>
				<img className={styles.itemImage} src={item.itemImgSrc} alt="item-pic" />
				<div className={styles.itemCountBlock}>
					<button className={styles.itemCountButton} onClick={removeItem}>
						<img className={styles.itemCountButtonIcon} src={minusIcon} alt="minus" />
					</button>
					<div className={styles.itemCounter}>{item.count}</div>
					<button className={styles.itemCountButton} onClick={addItem}>
						<img className={styles.itemCountButtonIcon} src={plusIcon} alt="plus" />
					</button>
				</div>
			</div>
			<div className={styles.itemNamePriceBlock}>
				<div className={styles.itemNameBlock}>
					<div className={styles.itemName}>
						{item.itemName}
					</div>
				</div>
				<div className={styles.itemPriceBlock}>
					<div className={styles.itemPrice}>
						{`${item.itemPrice} ₽`}
					</div>
				</div>
			</div>
			<div className={styles.itemDeleteTotalBlock}>
				<button className={styles.deleteItemButton}>
					<img src={deleteIcon} alt="delete" />
				</button>
				<div className={styles.totalPriceBlock}>
					<div className={styles.totalPrice}>
						{`${item.itemPrice * item.count} ₽`}
					</div>
				</div>
			</div>
		</div>
	);
};