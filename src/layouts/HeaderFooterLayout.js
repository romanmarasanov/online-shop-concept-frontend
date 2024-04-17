import styles from "./headerFooterLayout.module.css"
import { Outlet } from 'react-router-dom';
import { SiteCeiling } from '../components/ceiling/siteCeiling';
import { SiteFooter } from '../components/footer/siteFooter';

export const HeaderFooterLayout = ( {cartItems, onCartChange} ) => {
  return (
    <div className={styles.content}>
			<SiteCeiling cart={cartItems} />
			<Outlet context={{cartItems: cartItems, onCartChange: onCartChange}} />
			<SiteFooter />
		</div>
  );
}

export default HeaderFooterLayout;
