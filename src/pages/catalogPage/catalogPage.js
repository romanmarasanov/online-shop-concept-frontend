import styles from "./catalogPage.module.css"
import { getItems } from "../../data/data"
import pageContainerStyles from "../../pageContainer.module.css"
import { SiteCeiling } from '../../components/ceiling/siteCeiling';
import { SiteFooter } from '../../components/footer/siteFooter';
import { ItemCard } from '../../components/itemCard/itemCard';
import { useEffect, useState } from "react";

export const CatalogPage = () => {
	
	const [categories, setCategories] = useState([]);
	
	// TODO: сейчас этот вариант порождает бесконечный луп рендера, но я не нашёл как это пофиксить, чтобы счетчики обновлялись динамически
	useEffect(() => {
		setCategories(getItems());
	}, window.sessionStorage.cartItems ? JSON.parse(window.sessionStorage.cartItems) : []);
	
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
									item={item}
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
