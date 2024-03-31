import styles from "./cartTotal.module.css"

export const CartTotal = () => {
	return (
		<div className={styles.container}>
			<div className={styles.totalBlock}>
				<span>ИТОГО</span>
				<div className={styles.totalPrice}>
					{`₽ ${totalPrice()}`}
				</div>
			</div>
			<button className={styles.purchaseButton}>
				Перейти к оформлению
			</button>
		</div>
	);
};

const totalPrice = () => {
	return 3000;
}