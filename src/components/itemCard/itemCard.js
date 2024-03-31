import styles from "./itemCard.module.css"
import starIcon from "../../assets/icons/Star.svg"
import { addCartItem } from "../../data/data"

export const ItemCard = ({ id, itemImgSrc, itemName, itemPrice, hasDiscount, itemDiscountPrice, itemRating }) => {
	
	const addItemToCart = () => {
		addCartItem(
			{ id, itemImgSrc, itemName, itemPrice, hasDiscount, itemDiscountPrice, itemRating }
		)
	}
	
	return (
		<div className={styles.container}>
			<img className={styles.itemImage} src={itemImgSrc} alt="item-pic" />
			<div className={styles.itemInfoBlock}>
				<div className={styles.itemNameRatingColumn}>
					<div className={styles.itemNameBlock}>
						<span className={styles.itemName}>{itemName}</span>
					</div>
					<div className={styles.itemRatingBlock}>
						<img src={starIcon} alt="star" />
						<span className={styles.itemRating}>
							{itemRating}
						</span>
					</div>
				</div>
				<div className={styles.itemnPriceBuyButtonColumn}>
					<div className={styles.itemPriceBlock}>
						<div className={styles.itemPrice}>
							{`${hasDiscount ? itemDiscountPrice : itemPrice} ₽`}
						</div>
						{hasDiscount
							? <div className={styles.itemPriceWithoutDiscount}>
								{`${itemPrice} ₽`}
							</div>
							: null}
					</div>
					<div className={styles.buyButtonBlock}>
						<button className={styles.buyButton} onClick={addItemToCart}>Купить</button>
					</div>
				</div>
			</div>
		</div>
	);
};