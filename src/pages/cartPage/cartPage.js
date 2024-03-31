import { CartItemCard } from '../../components/cartItemCard/cartItemCard';
import { SiteCeiling } from '../../components/ceiling/siteCeiling';
import { SiteFooter } from '../../components/footer/siteFooter';

export const CartPage = () => {
	return (
		<div>
			<SiteCeiling />
			<CartItemCard 
				itemImgSrc={"./images/Apple AirPods_1.png"} 
        itemName="Apple AirPods" 
        itemPrice={1500} 
				itemCount={2}
			/>
			<SiteFooter />
		</div>
	);
};