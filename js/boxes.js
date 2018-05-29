/*eslint no-console: "off"*/
const boxes = document.querySelectorAll('.box');
const ballWidth = 16;

// Funkcja przyjmuje dwa argumenty: które koło, jaki procent wiedzy
function findBallPosition(ball, percentOfKnowledge, barWidth) {
  let percent = (100 - percentOfKnowledge) / 100;
  ball.style.transform = `translateX(calc(${barWidth}px - ${ballWidth / 2}px - ${barWidth * percent}px))`;
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
  const barWidth = this.querySelector('.bar').offsetWidth + 20; // 20px to pading z obu stron (10 + 10)
  const balls = this.querySelectorAll('.bar-ball');
  const [ballPhotoshop, ballIndesign, ballIllustrator, ballQuarkXpress, ballHTML, ballCSS, ballJS, ballOffice] = [...balls];

  findBallPosition(ballPhotoshop, 90, barWidth);
  findBallPosition(ballIndesign, 30, barWidth);
  findBallPosition(ballIllustrator, 40, barWidth);
  findBallPosition(ballQuarkXpress, 90, barWidth);
  findBallPosition(ballHTML, 60, barWidth);
  findBallPosition(ballCSS, 70, barWidth);
  findBallPosition(ballJS, 50, barWidth);
  findBallPosition(ballOffice, 40, barWidth);

  innerBox.forEach(box => box.classList.toggle('is-visible2'));
};

AboutBoxes.prototype.revealBoxLanguages = function() {
  const innerBox = this.querySelectorAll('.box-skills-languages-wrapper');
  const barWidth = this.querySelector('.bar').offsetWidth + 20; // 20px to pading z obu stron (10 + 10)
  const balls = this.querySelectorAll('.bar-ball');
  const [ballPolish, ballEnglish] = [...balls];

  findBallPosition(ballPolish, 95, barWidth);
  findBallPosition(ballEnglish, 45, barWidth);

  innerBox.forEach(box => box.classList.toggle('is-visible2'));
};

const allBoxes = new AboutBoxes(...boxes);

allBoxes.boxEdu.addEventListener('click', allBoxes.revealBoxEduWorkCourses);
allBoxes.boxWork.addEventListener('click', allBoxes.revealBoxEduWorkCourses);
allBoxes.boxCourses.addEventListener('click', allBoxes.revealBoxEduWorkCourses);
allBoxes.boxSkills.addEventListener('click', allBoxes.revealBoxSkills);
allBoxes.boxLanguages.addEventListener('click', allBoxes.revealBoxLanguages);
