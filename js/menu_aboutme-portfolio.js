const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const headerMyName = document.querySelector('.menu__header .header__my-name');
const menuList = document.querySelector('.menu__list');
const menuListItem = document.querySelectorAll('.menu__list .list__item');
const headerAboutme = document.querySelector('.header-aboutme');
const headerPortfolio = document.querySelector('.header-portfolio');

const containerAboutMe = document.querySelector(
	'.aboutme-container',
);
const containerPortfolio = document.querySelector(
	'.portfolio-container',
);

const body = document.querySelector('body');

let menuIsVisible = true;

const toggleMenu = () => {
	if (menuIsVisible) {
		menu.classList.add('show-menu');
		headerMyName.classList.add('show');
		menuList.classList.add('show');
		menuListItem.forEach(menuItem => menuItem.classList.add('show'));

		if (headerAboutme !== null) {
			headerAboutme.classList.add('hide-header');
			containerAboutMe.style.display = 'none';
		}

		if (headerPortfolio !== null) {
			headerPortfolio.classList.add('hide-header');
			containerPortfolio.style.display = 'none';
		}

		hamburgerMenu.classList.add('close-btn');
		body.style.backgroundColor = 'var(--background-clr)';

		menuIsVisible = false;
	} else {
		menu.classList.remove('show-menu');
		headerMyName.classList.remove('show');
		menuList.classList.remove('show');
		menuListItem.forEach(menuItem => menuItem.classList.remove('show'));

		hamburgerMenu.classList.remove('close-btn');

		if (headerAboutme !== null) {
			setTimeout(() => {
				headerAboutme.classList.remove('hide-header');
				containerAboutMe.style.display = 'flex';
			}, 400);
		}

		if (headerPortfolio !== null) {
			setTimeout(() => {
				headerPortfolio.classList.remove('hide-header');
				containerPortfolio.style.display = 'flex';
			}, 400);
		}

		menuIsVisible = true;
	}
};

hamburgerMenu.addEventListener('click', toggleMenu);
