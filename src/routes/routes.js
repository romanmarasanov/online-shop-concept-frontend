import { Routes, Route } from "react-router-dom";
import { HeaderFooterLayout } from "../layouts/HeaderFooterLayout"
import { Catalog } from "./catalog/catalog"
import { Cart } from "./cart/cart"
import { useEffect, useState } from "react";

export const AppRoutes = () => {

	const cartItemsFromStore = JSON.parse(window.sessionStorage.getItem("cartItems") || "[]");
	const [cartItems, setCartItems] = useState(cartItemsFromStore);

	const onCartChange = (item, ammount) => {
		const itemFromCart = cartItems.find(cartItem => item.id === cartItem.id);
		if (itemFromCart) {
			if (itemFromCart.count + ammount <= 0) {
				setCartItems(cartItems.filter(cartItem => cartItem.id !== itemFromCart.id));
			} else {
			setCartItems(cartItems.map(cartItem => cartItem.id === item.id ? { ...cartItem, count: cartItem.count + ammount } : cartItem));
			}
		} else {
			setCartItems(cartItems.concat([{ ...item, count: 1 }]));
		}
	}

	useEffect(() => {
		window.sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<Routes>
			<Route path={"/"} element={<HeaderFooterLayout cartItems={cartItems} onCartChange={onCartChange} />}>
				<Route
					path={"cart"}
					element={<Cart />} />
				<Route
					path={"catalog"}
					element={<Catalog />} />
			</Route>
		</Routes>
	);
};

