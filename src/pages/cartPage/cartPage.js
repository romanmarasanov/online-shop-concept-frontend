import { CartItemCard } from '../../components/cartItemCard/cartItemCard';

export const CartPage = () => {
	return (
		<div>
			<CartItemCard 
				itemImgSrc={"./images/Apple AirPods_1.png"} 
        itemName="Apple AirPods" 
        itemPrice={1500} 
				itemCount={2}
			/>
		</div>
	);
};