const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const headerMyName = document.querySelector('.menu__header .header__my-name');
const header = document.querySelector('.header');
const menuList = document.querySelector('.menu__list');
const menuListItem = document.querySelectorAll('.menu__list .list__item');

let menuIsVisible = true;

const toggleMenu = () => {
	if (menuIsVisible) {
		menu.classList.add('show-menu');
		header.classList.add('hide-header');
		headerMyName.classList.add('show');
		menuList.classList.add('show');
		menuListItem.forEach(menuItem => menuItem.classList.add('show'));

		menuIsVisible = false;
	} else {
		menu.classList.remove('show-menu');
		headerMyName.classList.remove('show');
		menuList.classList.remove('show');
		menuListItem.forEach(menuItem => menuItem.classList.remove('show'));

		setTimeout(() => {
			header.classList.remove('hide-header');
		}, 400);

		menuIsVisible = true;
	}
};

hamburgerMenu.addEventListener('click', toggleMenu);
