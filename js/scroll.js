/*eslint no-console: "off"*/
const buttons = document.querySelectorAll('.menu-items');
const pages = document.querySelectorAll('section');
let offsetsOfSections = [];
const [btn1, btn2, btn3, btn4] = [...buttons];
const maxScrollY = window.scrollMaxY || document.documentElement.scrollHeight - document.documentElement.clientHeight;

function getPagesOffsetTop() {
	pages.forEach((page, index) => {
		offsetsOfSections[index] = page.offsetTop;
	});
}

function scroll(destination) {
	let i = scrollY;
	let interval = setInterval(() => {
		destination = destination > maxScrollY ? maxScrollY : destination;

		if (scrollY <= destination) {
			scrollTo(0, i + 10);
			i = scrollY;

			if (scrollY > destination) {
				i = destination;
			}

			if (i >= destination) {
				scrollTo(0, destination);
				clearInterval(interval);
				return;
			}
		}

		if (scrollY >= destination) {
			scrollTo(0, i - 10);
			i = scrollY;

			if (i <= destination) {
				scrollTo(0, destination);
				clearInterval(interval);
				return;
			}
		}
	}, 1);
}

btn1.addEventListener('click', e => {
	e.preventDefault();
	getPagesOffsetTop();
	scroll(offsetsOfSections[0]);
});

btn2.addEventListener('click', e => {
	e.preventDefault();
	getPagesOffsetTop();
	scroll(offsetsOfSections[1]);
});

btn3.addEventListener('click', e => {
	e.preventDefault();
	getPagesOffsetTop();
	scroll(offsetsOfSections[2]);
});

btn4.addEventListener('click', e => {
	e.preventDefault();
	getPagesOffsetTop();
	scroll(offsetsOfSections[3]);
});
