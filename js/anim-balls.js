const skillBalls = document.querySelectorAll('.skills .bar__ball');
const languagesBalls = document.querySelectorAll('.languages .bar__ball');
const bar = document.querySelector('.bar');
const skills = document.querySelector('.skills');
const ballWidth = 15;
const tableOfSkillsNumbers = [1, 1, 3.5, 3.5, 8.5, 2.5, 2.5, 3.5, 5, 5, 8.5, 6];
const tableOfLanguagesNumbers = [1, 7];

function setSkillsBallsTransform(widthOfBar) {
	for (let i = 0; i < skillBalls.length; i++) {
		skillBalls[i].style.transform = `translateX(${widthOfBar -
			(tableOfSkillsNumbers[i] * widthOfBar) / 10 -
			ballWidth / 2}px)`;
	}
}

function setLanguagesBallsTransform(widthOfBar) {
	for (let i = 0; i < languagesBalls.length; i++) {
		languagesBalls[i].style.transform = `translateX(${widthOfBar -
			(tableOfLanguagesNumbers[i] * widthOfBar) / 10 -
			ballWidth / 2}px)`;
	}
}

window.addEventListener('scroll', _ => {
	let widthOfBar = bar.offsetWidth;

	if (window.scrollY >= skills.offsetTop + 500) {
		setSkillsBallsTransform(widthOfBar);
	}

	if (window.scrollY + window.innerHeight + 100 > variables.body.offsetHeight) {
		setLanguagesBallsTransform(widthOfBar);
	}
});

window.addEventListener('resize', _ => {
	let widthOfBar = bar.offsetWidth;

	setSkillsBallsTransform(widthOfBar);
	setLanguagesBallsTransform(widthOfBar);
});
