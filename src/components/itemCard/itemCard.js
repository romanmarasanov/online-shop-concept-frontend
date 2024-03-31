import styles from "./itemCard.module.css"
import starIcon from "../../assets/icons/Star.svg"
import { addCartItem } from "../../data/data"

export const ItemCard = ({ item }) => {
	
	const addItem = () => {
		addCartItem(item, 1);
	}
	
	return (
		<div className={styles.container}>
			<img className={styles.itemImage} src={item.itemImgSrc} alt="item-pic" />
			<div className={styles.itemInfoBlock}>
				<div className={styles.itemNameRatingColumn}>
					<div className={styles.itemNameBlock}>
						<span className={styles.itemName}>{item.itemName}</span>
					</div>
					<div className={styles.itemRatingBlock}>
						<img src={starIcon} alt="star" />
						<span className={styles.itemRating}>
							{item.itemRating}
						</span>
					</div>
				</div>
				<div className={styles.itemnPriceBuyButtonColumn}>
					<div className={styles.itemPriceBlock}>
						<div className={styles.itemPrice}>
							{`${item.itemPrice} ₽`}
						</div>
						{item.hasDiscount
							? <div className={styles.itemPriceWithoutDiscount}>
								{`${item.itemWithoutDiscountPrice} ₽`}
							</div>
							: null}
					</div>
					<div className={styles.buyButtonBlock}>
						<button className={styles.buyButton} onClick={addItem}>Купить</button>
					</div>
				</div>
			</div>
		</div>
	);
};