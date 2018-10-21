class Menu {
	constructor(variables) {
		this.variables = variables;
		this.menuIsVisible = true;
		this.toggleMenu = this.toggleMenu.bind(this);
		this.delay = 400;
	}

	showMenuHideHeader() {
		this.variables.hamburgerMenu.classList.add('close-btn');
		this.variables.menu.classList.add('show-menu');
		this.variables.headerMyName.classList.add('show');
		this.variables.menuList.classList.add('show');
		this.variables.menuListItem.forEach(menuItem =>
			menuItem.classList.add('show'),
		);

		this.variables.header.classList.add('hide-header');
	}

	hideMenuShowHeader() {
		this.variables.hamburgerMenu.classList.remove('close-btn');
		this.variables.menu.classList.remove('show-menu');
		this.variables.headerMyName.classList.remove('show');
		this.variables.menuList.classList.remove('show');
		this.variables.menuListItem.forEach(menuItem =>
			menuItem.classList.remove('show'),
		);

		setTimeout(() => {
			this.variables.header.classList.remove('hide-header');
		}, this.delay);
	}

	toggleMenu() {
		if (this.menuIsVisible) {
			this.showMenuHideHeader();
			this.menuIsVisible = false;
		} else {
			this.hideMenuShowHeader();
			this.menuIsVisible = true;
		}
	}
}

class Menu2 extends Menu {
	constructor() {
		super(variables);
	}

	toggleMenu() {
		if (this.menuIsVisible) {
			this.showMenuHideHeader();
			this.variables.footer.style.display = 'none';
			this.variables.background.style.display = 'none';
			this.menuIsVisible = false;
		} else {
			this.hideMenuShowHeader();
			setTimeout(() => {
				this.variables.background.style.display = 'flex';
				this.variables.footer.style.display = 'flex';
			}, this.delay);
			this.menuIsVisible = true;
		}
	}
}
