/*eslint no-console: "off"*/
const buttons = document.querySelectorAll('.menu-items');
const pages = document.querySelectorAll('section');
let offsetsOfSections = [];
const [btn1, btn2, btn3, btn4] = [...buttons];

function getPagesOffsetTop() {
	pages.forEach((page, index) => {
		offsetsOfSections[index] = page.offsetTop;
	});
}

function scroll(destination) {
	let i = scrollY;
<<<<<<< HEAD
	let startScroll = scrollY;

	if (destination > window.scrollMaxY) {
		destination = window.scrollMaxY;
	}

	let distance = Math.abs(startScroll - destination);
	let howManyPixelsMove = Math.floor(distance / 100);

	let interval = setInterval(() => {
		destination = destination > window.scrollMaxY ? window.scrollMaxY : destination;
=======
  let startScroll = scrollY;
  
  if (destination > scrollMaxY) {
    destination = scrollMaxY
  }
  
  let distance = Math.abs(startScroll - destination);
  let howManyPixelsMove = Math.floor(distance / 20);
  
	let interval = setInterval(() => {
		destination = destination > scrollMaxY ? scrollMaxY : destination;
>>>>>>> 409430ca35ae59c48788ca040681d4cdf4e19468

		if (scrollY <= destination) {
			scrollTo(0, i + howManyPixelsMove);
			i = scrollY;
      

			if (scrollY > destination) {
				i = destination;
			}

			if (i >= destination) {
				scrollTo(0, destination);
        endScroll = scrollY;
				clearInterval(interval);
<<<<<<< HEAD
				console.log(startScroll, destination, distance, howManyPixelsMove);
=======
        console.log(startScroll, destination, distance, howManyPixelsMove);
>>>>>>> 409430ca35ae59c48788ca040681d4cdf4e19468
				return;
			}
		}

		if (scrollY >= destination) {
			scrollTo(0, i - howManyPixelsMove);
			i = scrollY;
      

			if (i <= destination) {
				scrollTo(0, destination);
        endScroll = scrollY;
				clearInterval(interval);
<<<<<<< HEAD
				console.log(startScroll, destination, distance, howManyPixelsMove);
=======
        console.log(startScroll, destination, distance, howManyPixelsMove);
>>>>>>> 409430ca35ae59c48788ca040681d4cdf4e19468
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
