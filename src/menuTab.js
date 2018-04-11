"use strict";

function setImage(image) {
	image.src = 'assets/graphics/menutab.jpg';
}

function appendItems(section, menuItems) {
	for (let i = 0; i < menuItems.length; i++) {
		let item = document.createElement('h4');
		item.textContent = menuItems[i].item + ' ' + menuItems[i].price;
		section.appendChild(item);
		if (menuItems[i].desc !== '') {
			let desc = document.createElement('p');
			desc.textContent = menuItems[i].desc;
			desc.classList.add('item-info');
			section.appendChild(desc);
		}
	}
}

function setTexItems(section) {
	const menuItems = [
		{item: 'Sliced Brisket', desc: 'mesquite smoked bbq sauce', price: '$10'},
		{item: 'Chopped Brisket', desc: 'mesquite smoked bbq sauce', price: '$9'},
		{item: 'Pulled Pork', desc: 'mesquite smoked bbq sauce', price: '$8.50'},
		{item: 'Pulled Chicken', desc: 'mesquite smoked bbq sauce', price: '$8'}
	];

	const subHeading = document.createElement('h3');
	subHeading.textContent = 'Sandwiches';

	section.appendChild(subHeading);

	appendItems(section, menuItems);

};

function setMexItems(section) {
	const menuItems = [
		{item: 'Smoked Brisket', desc: 'tomato serrano salsa', price: '$6'},
		{item: 'Cerveza Beef Fajita', desc: 'tomato serrano salsa', price: '$6'},
		{item: 'Smoked Carnitas', desc: 'tomato serrano salsa', price: '$5' },
		{item: 'Pulled Pollo', desc: 'tomato serrano salsa', price: '$4.50'}
	];

	const subHeading = document.createElement('h3');
	subHeading.textContent = 'Tortillas';

	section.appendChild(subHeading);

	appendItems(section, menuItems);
}

function setSideItems(section) {
	const menuItems = [
		{item: 'Charro Beans', desc: '', price: '$2.50'},
		{item: 'Smoked Corn', desc: '', price: '$2.75'},
		{item: 'Mexican Rice', desc: '', price: '$2.50'},
		{item: 'Red Potato Salad', desc: '', price: '$2.75'}
	];

	appendItems(section, menuItems);
}

function setDrinkItems(section) {
	const menuItems = [
		{item: "Dawn's IPA", desc: '', price: '$8'},
		{item: 'Ridge Dark Lager', desc: '', price: '$7'},
		{item: 'Shade Pilsner', desc: '', price: '$6.50'},
		{item: 'Tios Cerveza', desc: '', price: '$7'},
		{item: 'Cielto Cerveza', desc: '', price: '$7.50'}
	];

	appendItems(section, menuItems);
}

function setContent(section) {
	const h1 = document.createElement('h1')
	const h2Tex = document.createElement('h2');
	const h2Mex = document.createElement('h2');
	const h2Sides = document.createElement('h2');
	const h2Drinks = document.createElement('h2');

	const menuArray = [h1, h2Tex, h2Mex, h2Sides, h2Drinks];
	const contentFuncs = [null, setTexItems, setMexItems, setSideItems, setDrinkItems];

	h1.textContent = "Our menu is simple but tasty!";
	h2Tex.textContent = 'Tex';
	h2Mex.textContent = 'Mex';
	h2Sides.textContent = 'Sides';
	h2Drinks.textContent = 'Drinks';

	for (let i = 0; i < menuArray.length; i++) {
		section.appendChild(menuArray[i]);
		if (contentFuncs[i]) contentFuncs[i](section);
	}
}

const getMenuSection = () => {
	const outerSection = document.createElement('section');
	outerSection.id = 'main-section';
	const article = document.createElement('article');
	const image = document.createElement('img');
	const innerSection = document.createElement('section');

	setImage(image);
	setContent(innerSection);

	article.appendChild(image);
	article.appendChild(innerSection);
	outerSection.appendChild(article);

	return outerSection;
};

export { getMenuSection };
