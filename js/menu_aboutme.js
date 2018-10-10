const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const headerMyName = document.querySelector('.menu__header .header__my-name');
const menuList = document.querySelector('.menu__list');
const menuListItem = document.querySelectorAll('.menu__list .list__item');
const header = document.querySelector('.header-aboutme-portfolio');

const containerAboutMeAndPortfolio = document.querySelector(
	'.container-aboutme-portfolio',
);

const body = document.querySelector('body');

let menuIsVisible = true;

const toggleMenu = () => {
	if (menuIsVisible) {
		menu.classList.add('show-menu');
		headerMyName.classList.add('show');
		menuList.classList.add('show');
		header.classList.add('hide-header');
		menuListItem.forEach(menuItem => menuItem.classList.add('show'));

		hamburgerMenu.classList.add('close-btn');

		body.style.backgroundColor = 'var(--background-clr)';
		containerAboutMeAndPortfolio.style.display = 'none';

		menuIsVisible = false;
	} else {
		menu.classList.remove('show-menu');
		headerMyName.classList.remove('show');
		menuList.classList.remove('show');
		menuListItem.forEach(menuItem => menuItem.classList.remove('show'));

		hamburgerMenu.classList.remove('close-btn');

		containerAboutMeAndPortfolio.style.display = 'flex';

		setTimeout(() => {
			header.classList.remove('hide-header');
		}, 400);

		menuIsVisible = true;
	}
};

hamburgerMenu.addEventListener('click', toggleMenu);
