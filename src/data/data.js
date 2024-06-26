
export const getItems = () => {
	return [
		{
			category: "Наушники",
			items: [
				{
					id: 1,
					itemImgSrc: "./images/Apple AirPods_1.png",
					itemName: "Apple AirPods",
					itemPrice: 2200,
					hasDiscount: true,
					itemWithoutDiscountPrice: 3500,
					itemRating: 4.8,

				},
				{
					id: 2,
					itemImgSrc: "./images/Apple BYZ S8521.png",
					itemName: "Apple AirPods",
					itemPrice: 2500,
					hasDiscount: true,
					itemWithoutDiscountPrice: 3500,
					itemRating:4.9,
					
				},
				{
					id: 3,
					itemImgSrc: "./images/Apple BYZ S8521.png",
					itemName: "Apple BYZ",
					itemPrice: 3000,
					hasDiscount: false,
					itemWithoutDiscountPrice: 0,
					itemRating:4.7,
					
				},
				{
					id: 4,
					itemImgSrc: "./images/Apple AirPods_1.png",
					itemName: "Apple AirPods",
					itemPrice: 2000,
					hasDiscount: true,
					itemWithoutDiscountPrice: 3500,
					itemRating:4.75,
					
				},
				{
					id: 5,
					itemImgSrc: "./images/Apple EarPods_1.png",
					itemName: "Apple AirPods",
					itemPrice: 2000,
					hasDiscount: true,
					itemWithoutDiscountPrice: 4500,
					itemRating:5,
					
				},

			]
		},
		{
			category: "Ещё наушники",
			items: [
				{
					id: 6,
					itemImgSrc: "./images/Apple AirPods_1.png",
					itemName: "Apple AirPods",
					itemPrice: 2200,
					hasDiscount: true,
					itemWithoutDiscountPrice: 2500,
					itemRating: 4.8,

				},
				{
					id: 7,
					itemImgSrc: "./images/Apple BYZ S8521.png",
					itemName: "Apple AirPods",
					itemPrice: 2500,
					hasDiscount: true,
					itemWithoutDiscountPrice: 5500,
					itemRating:4.9,
					
				},
			
			]
		}
	]
}

export const addCartItem = (cartItem, addPieces) => {
	if (!window.sessionStorage.cartItems) {
		window.sessionStorage.cartItems = '[]';
	}
	let cartItems = JSON.parse(window.sessionStorage.cartItems);
	
	const itemFound = cartItems.find(item => item.id === cartItem.id);
	if (itemFound) {
		cartItems = cartItems.map(item => item.id === cartItem.id ? {...item, count: item.count + addPieces} : item)
	} else {
		cartItems.push({...cartItem, count: 1});
	}
	if (itemFound && itemFound.count + addPieces <= 0) {
		cartItems = cartItems.filter(item => item.id !== itemFound.id);
	}

	window.sessionStorage.cartItems = JSON.stringify(cartItems);
}

export const getCartItems = () => {
	return window.sessionStorage.cartItems ? JSON.parse(window.sessionStorage.cartItems) : [];
}

export const getCounters = () => {
	return window.sessionStorage.cartItems
	? {favorites: 0, cart: JSON.parse(window.sessionStorage.cartItems).reduce((total, item) => total + item.count, 0)} 
	: {favorites: 0, cart: 0}  
}