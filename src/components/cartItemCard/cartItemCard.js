import styles from "./cartItemCard.module.css"
import deleteIcon from "../../assets/icons/Delete.svg"
import minusIcon from "../../assets/icons/Minus.svg"
import plusIcon from "../../assets/icons/Vector.svg"

export const CartItemCard = ({ itemImgSrc, itemName, itemPrice, itemCount }) => {
	return (
		<div className={styles.container}>
			<div className={styles.itemImageCounterBlock}>
				<img className={styles.itemImage} src={itemImgSrc} alt="item-pic" />
				<div className={styles.itemCountBlock}>
					<button className={styles.itemCountButton}>
						<img className={styles.itemCountButtonIcon} src={minusIcon} alt="minus" />
					</button>
					<div className={styles.itemCounter}>{itemCount}</div>
					<button className={styles.itemCountButton}>
						<img className={styles.itemCountButtonIcon} src={plusIcon} alt="plus" />
					</button>
				</div>
			</div>
			<div className={styles.itemNamePriceBlock}>
				<div className={styles.itemNameBlock}>
					<div className={styles.itemName}>
						{itemName}
					</div>
				</div>
				<div className={styles.itemPriceBlock}>
					<div className={styles.itemPrice}>
						{`${itemPrice} ₽`}
					</div>
				</div>
			</div>
			<div className={styles.itemDeleteTotalBlock}>
				<button className={styles.deleteItemButton}>
					<img src={deleteIcon} alt="delete" />
				</button>
				<div className={styles.totalPriceBlock}>
					<div className={styles.totalPrice}>
						{`${itemPrice * itemCount} ₽`}
					</div>
				</div>
			</div>
		</div>
	);
};