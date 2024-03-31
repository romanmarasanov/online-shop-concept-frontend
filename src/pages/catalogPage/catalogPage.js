import styles from "./catalogPage.module.css"
import pageContainerStyles from "../../pageContainer.module.css"
import { SiteCeiling } from '../../components/ceiling/siteCeiling';
import { SiteFooter } from '../../components/footer/siteFooter';
import { ItemCard } from '../../components/itemCard/itemCard';

export const CatalogPage = () => {
	return (
		<div className={pageContainerStyles.pageContainer}>
			<SiteCeiling />
			<div className={styles.content}>
				<ItemCard
					itemImgSrc={"./images/Apple AirPods_1.png"}
					itemName="Apple AirPods"
					itemPrice={2000}
					hasDiscount={true}
					itemDiscountPrice={1500}
					itemRating={4.7}
				/>
			</div>
			<SiteFooter />
		</div>
	);
};
