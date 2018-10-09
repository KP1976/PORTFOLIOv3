const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const headerAboutMeAndPortfolio = document.querySelector(
	'.header-aboutme-portfolio',
);
const headerMyName = document.querySelector('.menu__header .header__my-name');
const menuList = document.querySelector('.menu__list');
const menuListItem = document.querySelectorAll('.menu__list .list__item');
const arrows = document.querySelector('.arrows');
const containerAboutMeAndPortfolio = document.querySelector(
	'.container-aboutme-portfolio',
);

let menuIsVisible = true;

const toggleMenu = () => {
	if (menuIsVisible) {
		menu.classList.add('show-menu');
		headerMyName.classList.add('show');
		menuList.classList.add('show');
		menuListItem.forEach(menuItem => menuItem.classList.add('show'));

		hamburgerMenu.classList.add('close-btn');

		if (header !== null) {
			header.classList.add('hide-header');
		}

		if (headerAboutMeAndPortfolio !== null) {
			headerAboutMeAndPortfolio.classList.add('hide-header');
		}

		if (arrows !== null) {
			arrows.classList.add('hide');
		}

		if (containerAboutMeAndPortfolio !== null) {
			containerAboutMeAndPortfolio.style.height = '100vh';
		}

		menuIsVisible = false;
	} else {
		menu.classList.remove('show-menu');
		headerMyName.classList.remove('show');
		menuList.classList.remove('show');
		menuListItem.forEach(menuItem => menuItem.classList.remove('show'));

		hamburgerMenu.classList.remove('close-btn');

		if (arrows !== null) {
			arrows.classList.remove('hide');
		}

		if (containerAboutMeAndPortfolio !== null) {
			containerAboutMeAndPortfolio.style.height = 'auto';
		}

		if (header !== null) {
			setTimeout(() => {
				header.classList.remove('hide-header');
			}, 400);
		}

		if (headerAboutMeAndPortfolio !== null) {
			setTimeout(() => {
				headerAboutMeAndPortfolio.classList.remove('hide-header');
			}, 400);
		}

		menuIsVisible = true;
	}
};

hamburgerMenu.addEventListener('click', toggleMenu);
