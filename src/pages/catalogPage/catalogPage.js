import styles from "./catalogPage.module.css"
import { getItems } from "../../data/data"
import pageContainerStyles from "../../pageContainer.module.css"
import { SiteCeiling } from '../../components/ceiling/siteCeiling';
import { SiteFooter } from '../../components/footer/siteFooter';
import { ItemCard } from '../../components/itemCard/itemCard';
import { useEffect, useState } from "react";

export const CatalogPage = () => {
	
	const [categories, setCategories] = useState([]);
	
	useEffect(() => {
		const dataCategories = getItems();
		setCategories(dataCategories);
		console.log(getItems());
	}, []);
	
	return (
		<div className={pageContainerStyles.pageContainer}>
			<SiteCeiling />
			<div className={styles.content}></div>
			{
				categories.map(category => { return(
					<div className={styles.categoryBlock}>
						<span className={styles.category}>
							{category.category}
						</span>
						<div className={styles.itemsBlock}>
							{category.items.map(item => 
								<ItemCard 
									id={item.id}
									itemImgSrc={item.itemImgSrc}
									itemName={item.itemName}
									itemPrice={item.itemPrice}
									hasDiscount={item.hasDiscount}
									itemDiscountPrice={item.itemDiscountPrice}
									itemRating={item.itemRating}
								/>
							)}
						</div>
					</div>
				)})
			}
			<SiteFooter />
		</div>
	);
};
