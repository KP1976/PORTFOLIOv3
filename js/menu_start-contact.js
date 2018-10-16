const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const headerStart = document.querySelector('.header');
const headerContact = document.querySelector('.header-contact');
const headerMyName = document.querySelector('.menu__header .header__my-name');
const menuList = document.querySelector('.menu__list');
const menuListItem = document.querySelectorAll('.menu__list .list__item');

let menuIsVisible = true;

const toggleMenu = () => {
	if (menuIsVisible) {
		menu.classList.add('show-menu');
		headerMyName.classList.add('show');
		menuList.classList.add('show');
		menuListItem.forEach(menuItem => menuItem.classList.add('show'));

		if (headerStart !== null) {
			headerStart.classList.add('hide-header');
		}

		if (headerContact !== null) {
			headerContact.classList.add('hide-header');
		}

		hamburgerMenu.classList.add('close-btn');

		menuIsVisible = false;
	} else {
		menu.classList.remove('show-menu');
		headerMyName.classList.remove('show');
		menuList.classList.remove('show');
		menuListItem.forEach(menuItem => menuItem.classList.remove('show'));

		hamburgerMenu.classList.remove('close-btn');

		if (headerStart !== null) {
			setTimeout(() => {
				headerStart.classList.remove('hide-header');
			}, 400);
		}

		if (headerContact !== null) {
			setTimeout(() => {
				headerContact.classList.remove('hide-header');
			}, 400);
		}

		menuIsVisible = true;
	}
};

hamburgerMenu.addEventListener('click', toggleMenu);
