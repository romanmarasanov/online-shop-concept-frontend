
import { SiteCeiling } from '../../components/ceiling/siteCeiling';
import { SiteFooter } from '../../components/footer/siteFooter';
import { ItemCard } from '../../components/itemCard/itemCard';

export const CatalogPage = () => {
	return (
		<div>
			<SiteCeiling />
			<ItemCard 
				itemImgSrc={"./images/Apple AirPods_1.png"} 
        itemName="Apple AirPods" 
        itemPrice={2000} 
        hasDiscount={true} 
        itemDiscountPrice={1500} 
        itemRating={4.7}
			/>
			<SiteFooter />
		</div>
	);
};
