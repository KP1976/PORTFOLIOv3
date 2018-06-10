/*eslint no-console: "off"*/
const body = document.querySelector('body');
const boxes = document.querySelectorAll('.box');
const modals = document.querySelectorAll('.modal');
const modalContainers = document.querySelectorAll('.modal-container');
const ballWidth = 16;

// Funkcja przyjmuje dwa argumenty: które koło, jaki procent wiedzy
function findBallPosition(ball, percentOfKnowledge) {
	ball.style.left = `calc(${percentOfKnowledge}% - ${ballWidth / 2}px)`;
}

function events(switcher) {
	if (switcher === 'on') {
		allBoxes.boxEdu.addEventListener('click', allBoxes.revealBoxEduWorkCourses);
		allBoxes.boxWork.addEventListener('click', allBoxes.revealBoxEduWorkCourses);
		allBoxes.boxCourses.addEventListener('click', allBoxes.revealBoxEduWorkCourses);
		allBoxes.boxSkills.addEventListener('click', allBoxes.revealBoxSkills);
		allBoxes.boxLanguages.addEventListener('click', allBoxes.revealBoxLanguages);
	} else if (switcher === 'off') {
		allBoxes.boxEdu.removeEventListener('click', allBoxes.revealBoxEduWorkCourses);
		allBoxes.boxWork.removeEventListener('click', allBoxes.revealBoxEduWorkCourses);
		allBoxes.boxCourses.removeEventListener('click', allBoxes.revealBoxEduWorkCourses);
		allBoxes.boxSkills.removeEventListener('click', allBoxes.revealBoxSkills);
		allBoxes.boxLanguages.removeEventListener('click', allBoxes.revealBoxLanguages);
	}
}

function modalEvents(switcher) {
	if (switcher === 'on') {
		allBoxes.boxEdu.addEventListener('click', modalEdu);
		allBoxes.boxWork.addEventListener('click', modalWork);
		allBoxes.boxSkills.addEventListener('click', modalSkills);
		allBoxes.boxCourses.addEventListener('click', modalCourses);
		allBoxes.boxLanguages.addEventListener('click', modalLanguages);
		modals.forEach(modal => modal.addEventListener('click', closeModals));
	} else if (switcher === 'off') {
		allBoxes.boxEdu.removeEventListener('click', modalEdu);
		allBoxes.boxWork.removeEventListener('click', modalWork);
		allBoxes.boxSkills.removeEventListener('click', modalSkills);
		allBoxes.boxCourses.removeEventListener('click', modalCourses);
		allBoxes.boxLanguages.removeEventListener('click', modalLanguages);
	}
}

function modalEdu() {
	modals[0].classList.add('visibility-on');
	modalContainers[0].style.visibility = 'visible';
	modalContainers[0].style.transform = 'scale(1)';
	body.style.overflowY = 'hidden';
}

function modalWork() {
	modals[1].classList.add('visibility-on');
	modalContainers[1].style.visibility = 'visible';
	modalContainers[1].style.transform = 'scale(1)';
	body.style.overflowY = 'hidden';
}

function modalSkills() {
	modals[2].classList.add('visibility-on');
	modalContainers[2].style.visibility = 'visible';
	modalContainers[2].style.transform = 'scale(1)';
	body.style.overflowY = 'hidden';

	const innerBox = modals[2].querySelectorAll('.modal-box-skills-languages-wrapper');
	const balls = modals[2].querySelectorAll('.bar-ball');
	const [ballPhotoshop, ballIndesign, ballIllustrator, ballQuarkXpress, ballHTML, ballCSS, ballJS, ballOffice] = [...balls];

	console.log(balls);

	findBallPosition(ballPhotoshop, 50);
	findBallPosition(ballIndesign, 30);
	findBallPosition(ballIllustrator, 40);
	findBallPosition(ballQuarkXpress, 90);
	findBallPosition(ballHTML, 60);
	findBallPosition(ballCSS, 70);
	findBallPosition(ballJS, 50);
	findBallPosition(ballOffice, 40);

	innerBox.forEach(box => box.classList.toggle('is-visible2'));
}

function modalCourses() {
	modals[3].classList.add('visibility-on');
	modalContainers[3].style.visibility = 'visible';
	modalContainers[3].style.transform = 'scale(1)';
	body.style.overflowY = 'hidden';
}

function modalLanguages() {
	modals[4].classList.add('visibility-on');
	modalContainers[4].style.visibility = 'visible';
	modalContainers[4].style.transform = 'scale(1)';
	body.style.overflowY = 'hidden';

	const innerBox = modals[4].querySelectorAll('.box-skills-languages-wrapper');
	const balls = modals[4].querySelectorAll('.bar-ball');
	const [ballPolish, ballEnglish] = [...balls];

	findBallPosition(ballPolish, 95);
	findBallPosition(ballEnglish, 45);

	innerBox.forEach(box => box.classList.toggle('is-visible2'));
}

function closeModals(e) {
	// Jeżeli to na co klikniemy jest tłem modala to ma się zamknąć
	if (e.target === this) {
		this.classList.remove('visibility-on');
		body.style.overflowY = 'auto';
		modalContainers.forEach(modalContainer => {
			modalContainer.style.visibility = 'hidden';
			modalContainer.style.transform = 'scale(0)';
		});
	}
}

class AboutBoxes {
	constructor(boxEdu, boxWork, boxSkills, boxCourses, boxLanguages) {
		this.boxEdu = boxEdu;
		this.boxWork = boxWork;
		this.boxSkills = boxSkills;
		this.boxCourses = boxCourses;
		this.boxLanguages = boxLanguages;
	}
}

AboutBoxes.prototype.revealBoxEduWorkCourses = function() {
	const innerBox = this.querySelectorAll('.box-wrapper');
	innerBox.forEach(box => box.classList.toggle('is-visible'));
};

AboutBoxes.prototype.revealBoxSkills = function() {
	const innerBox = this.querySelectorAll('.box-skills-languages-wrapper');
	const balls = this.querySelectorAll('.bar-ball');
	const [ballPhotoshop, ballIndesign, ballIllustrator, ballQuarkXpress, ballHTML, ballCSS, ballJS, ballOffice] = [...balls];

	findBallPosition(ballPhotoshop, 50);
	findBallPosition(ballIndesign, 30);
	findBallPosition(ballIllustrator, 40);
	findBallPosition(ballQuarkXpress, 90);
	findBallPosition(ballHTML, 60);
	findBallPosition(ballCSS, 70);
	findBallPosition(ballJS, 50);
	findBallPosition(ballOffice, 40);

	innerBox.forEach(box => box.classList.toggle('is-visible2'));
};

AboutBoxes.prototype.revealBoxLanguages = function() {
	const innerBox = this.querySelectorAll('.box-skills-languages-wrapper');
	const balls = this.querySelectorAll('.bar-ball');
	const [ballPolish, ballEnglish] = [...balls];

	findBallPosition(ballPolish, 95);
	findBallPosition(ballEnglish, 45);

	innerBox.forEach(box => box.classList.toggle('is-visible2'));
};

const allBoxes = new AboutBoxes(...boxes);

if (window.innerWidth < 768) {
	events('on');
	modalEvents('off');
} else {
	events('off');
	modalEvents('on');
}

window.addEventListener('resize', () => {
	if (window.innerWidth > 768) {
		events('off');
		modalEvents('on');
	} else {
		events('on');
		modalEvents('off');
	}
});
