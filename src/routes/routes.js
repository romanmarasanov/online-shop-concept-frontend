import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homePage/homePage"
import { CatalogPage } from "../pages/catalogPage/catalogPage"
import { CartPage } from "../pages/cartPage/cartPage"



export const AppRoutes = () => {
	return(
		<Routes>
			<Route index element={<HomePage />} />
			<Route path='/catalog' element={<CatalogPage />} />
			<Route path='/cart' element={<CartPage />} />
		</Routes>
	);
};

