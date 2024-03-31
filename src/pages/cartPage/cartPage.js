import styles from "./cartPage.module.css"
import { CartItemCard } from '../../components/cartItemCard/cartItemCard';
import { SiteCeiling } from '../../components/ceiling/siteCeiling';
import { SiteFooter } from '../../components/footer/siteFooter';
import { CartTotal } from './cartTotal/cartTotal';

export const CartPage = () => {
	return (
		<div className={styles.container}>
			<SiteCeiling />
			<div className={styles.content}>
				<CartItemCard
					itemImgSrc={"./images/Apple AirPods_1.png"}
					itemName="Apple AirPods"
					itemPrice={1500}
					itemCount={2}
				/>
				<CartTotal />
			</div>
			<SiteFooter />
		</div>
	);
};