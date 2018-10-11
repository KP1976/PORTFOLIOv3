// skillsPercentage = 90, 50, 15, 75, 65, 70, 40, 30;
const balls = document.querySelectorAll('.bar__ball');
const bar = document.querySelector('.bar');
const skills = document.querySelector('.skills');
const languages = document.querySelector('.languages');
const ballWidth = 15;
const skillsHeight = skills.offsetHeight;
const languagesHeight = languages.offsetHeight;

function setSkillsBallsTransform(widthOfBar) {
	balls[0].style.transform = `translateX(${widthOfBar - widthOfBar / 10 - ballWidth / 2}px)`;
	balls[1].style.transform = `translateX(${widthOfBar - widthOfBar / 10 - ballWidth / 2}px)`;
	balls[2].style.transform = `translateX(${widthOfBar - 5 * widthOfBar / 10 - ballWidth / 2}px)`;
	balls[3].style.transform = `translateX(${widthOfBar - 5 * widthOfBar / 10 - ballWidth / 2}px)`;
	balls[4].style.transform = `translateX(${widthOfBar - 8.5 * widthOfBar / 10 - ballWidth / 2}px)`;
	balls[5].style.transform = `translateX(${widthOfBar - 2.5 * widthOfBar / 10 - ballWidth / 2}px)`;
	balls[6].style.transform = `translateX(${widthOfBar - 2.5 * widthOfBar / 10 - ballWidth / 2}px)`;
	balls[7].style.transform = `translateX(${widthOfBar - 3.5 * widthOfBar / 10 - ballWidth / 2}px)`;
	balls[8].style.transform = `translateX(${widthOfBar - 5 * widthOfBar / 10 - ballWidth / 2}px)`;
	balls[9].style.transform = `translateX(${widthOfBar - 3 * widthOfBar / 10 - ballWidth / 2}px)`;
	balls[10].style.transform = `translateX(${widthOfBar - 8.5 * widthOfBar / 10 - ballWidth / 2}px)`;
	balls[11].style.transform = `translateX(${widthOfBar - 6 * widthOfBar / 10 - ballWidth / 2}px)`;
}

function setLanguagesBallsTransform(widthOfBar) {
	balls[12].style.transform = `translateX(${widthOfBar - widthOfBar / 10 - ballWidth / 2}px)`;
	balls[13].style.transform = `translateX(${widthOfBar - 7 * widthOfBar / 10 - ballWidth / 2}px)`;
}

window.addEventListener('scroll', _ => {
	let widthOfBar = bar.offsetWidth;

	if ((skills.offsetTop - skillsHeight / 2 - window.scrollY) < 0) {
		setSkillsBallsTransform(widthOfBar);

	}

	if ((languages.offsetTop - languagesHeight * 3.5 - window.scrollY) < 0) {
		setLanguagesBallsTransform(widthOfBar);
	}
});

window.addEventListener('resize', _ => {
	let widthOfBar = bar.offsetWidth;
	setSkillsBallsTransform(widthOfBar);
	setLanguagesBallsTransform(widthOfBar);
});