"use strict";

function setImage(image) {
	image.src = 'assets/graphics/maintab.png';
}

function setContent(article) {
	const content = [
		"Gary's Great Restuarant is where you come to sit back, relax with your friends and let us provide you with tasty food to enhance your experience.",
		"We have a small menu of quality TexMex BBQ offerings.  Everything is prepared freshed daily, including the tortillas.  Every bite is a bite of freshness",
		"We also have a selection of craft beers.  Currently you can choose from IPA, Dark Lager, Pilsner or Mexican beer.  We rotate our selection regulary and seasonally.",
		"Come on down and sink your teeth into greatness."
	];

	for (let i = 0; i < content.length; i++) {
		let pElem = document.createElement('p');
		pElem.textContent = content[i];
		article.appendChild(pElem);
	}
}

const getMainSection = () => {
	const section = document.createElement('section');
	section.id = 'main-section';
	const article = document.createElement('article');
	const image = document.createElement('img');
	const content = document.createElement('p');

	setImage(image);

	article.appendChild(image);

	setContent(article);

	section.appendChild(article);

	return section;
};

export { getMainSection };
