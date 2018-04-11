"use strict";

function setImage(image) {
	image.src = 'assets/graphics/contacttab.jpg';
}

function setContent(content) {
	const formItems = [
		{tag: 'label', attrs: [{name: 'for', value: 'name'}], text: 'Name', required: null},
		{tag: 'input', attrs: [{name: 'type', value: 'text'}, {name: 'name', value: 'name'}], text: '', required: true},
		{tag: 'label', attrs: [{name: 'for', value: 'email'}], text: 'Email (optional)'},
		{tag: 'input', attrs: [{name: 'type', value: 'email'}, {name: 'name', value: 'email'}], text: '', required: false},
		{tag: 'label', attrs: [{name: 'for', value: 'comment'}], text: 'Comment', required: null},
		{tag: 'textarea', attrs: [{name: 'name', value: 'comment'}, {name: 'rows', value: '4'}, {name: 'cols', value: '60'}], text: '', required: true},
	];

	for (let i = 0; i < formItems.length; i++) {
		let elem = document.createElement(formItems[i].tag);
		if (formItems[i].tag === 'input') elem.classList.add('form-input');
		let attrs = formItems[i].attrs;
		for (let j = 0; j < attrs.length; j++) {
			elem.setAttribute(attrs[j].name, attrs[j].value);
		}
		if (formItems[i].required) elem.setAttribute('required','required');
		if (formItems[i].text !== '') elem.textContent = formItems[i].text;
		content.appendChild(elem);
		content.appendChild(document.createElement('br'));
	}

	const button = document.createElement('button')
	button.setAttribute('type', 'submit');
	button.classList.add('btn');
	button.textContent = 'Submit';
	content.appendChild(button);
	button.addEventListener('click', submitListener);
}

function submitListener(e) {
	const form = e.target.parentNode;
	const button = form.querySelectorAll('button'); // Only one button

	if (form.checkValidity()) {
		alert("Thank you for your comment.");
		form.reset();
	} else {
		button[0].click();
	}
}

const getContactSection = () => {
	const section = document.createElement('section');
	section.id = 'main-section';
	const article = document.createElement('article');
	const image = document.createElement('img');
	const content = document.createElement('form');
	content.id ="comments";
	content.setAttribute('action','#');
	content.setAttribute('method','post');
	const formDiv = document.createElement('div');

	setImage(image);

	const header = document.createElement('p');
	header.textContent = "We aim for perfection. Let us know when we didn't.  Let us know when we did.";

	setContent(content);

	article.appendChild(image);
	article.appendChild(header);
	formDiv.appendChild(content);
	article.appendChild(formDiv);
	section.appendChild(article);

	return section;
};

export { getContactSection };
