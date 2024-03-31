import styles from "./cartTotal.module.css"

export const CartTotal = ({ totalSum }) => {
	return (
		<div className={styles.container}>
			<div className={styles.totalBlock}>
				<span>ИТОГО</span>
				<div className={styles.totalPrice}>
					{`₽ ${totalSum}`}
				</div>
			</div>
			<button className={styles.purchaseButton}>
				Перейти к оформлению
			</button>
		</div>
	);
};