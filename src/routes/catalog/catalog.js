import styles from "./catalog.module.css"
import { getItems } from "../../data/data"
import { ItemCard } from '../../components/itemCard/itemCard';
import { useOutletContext } from "react-router-dom";

export const Catalog = ( ) => {

	const categories = getItems();
	const parentParams = useOutletContext();

	return (
		<div className={styles.content}>
			{
				categories.map(category => {
					return (
						<div className={styles.categoryBlock} key={category.category}>
							<span className={styles.category}>
								{category.category}
							</span>
							<div className={styles.itemsBlock}>
								{category.items.map(item =>
									<ItemCard
										key={item.id}
										item={item}
										onCartChange={parentParams.onCartChange}
									/>
								)}
							</div>
						</div>
					)
				})
			}
		</div>
	);
};


export default Catalog;