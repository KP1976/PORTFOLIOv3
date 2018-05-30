/*eslint no-console: "off"*/
const boxes = document.querySelectorAll('.box');
const ballWidth = 16;

// Funkcja przyjmuje dwa argumenty: które koło, jaki procent wiedzy
function findBallPosition(ball, percentOfKnowledge) {
  ball.style.left = `calc(${percentOfKnowledge}% - ${ballWidth / 2}px)`;
}

function startEvents() {
  allBoxes.boxEdu.addEventListener('click', allBoxes.revealBoxEduWorkCourses);
  allBoxes.boxWork.addEventListener('click', allBoxes.revealBoxEduWorkCourses);
  allBoxes.boxCourses.addEventListener('click', allBoxes.revealBoxEduWorkCourses);
  allBoxes.boxSkills.addEventListener('click', allBoxes.revealBoxSkills);
  allBoxes.boxLanguages.addEventListener('click', allBoxes.revealBoxLanguages);
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
  startEvents();
}

window.addEventListener('resize', () => {
  console.log(window.innerWidth);
  if (window.innerWidth > 768) {
    allBoxes.boxEdu.removeEventListener('click', allBoxes.revealBoxEduWorkCourses);
    allBoxes.boxWork.removeEventListener('click', allBoxes.revealBoxEduWorkCourses);
    allBoxes.boxCourses.removeEventListener('click', allBoxes.revealBoxEduWorkCourses);
    allBoxes.boxSkills.removeEventListener('click', allBoxes.revealBoxSkills);
    allBoxes.boxLanguages.removeEventListener('click', allBoxes.revealBoxLanguages);
  } else {
    startEvents();
  }
});
