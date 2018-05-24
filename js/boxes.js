/*eslint no-console: "off"*/
const boxes = document.querySelectorAll('.box');

function revealBoxEduWorkCourses() {
  const innerBox = this.querySelectorAll('.box-edu-wrapper');
  innerBox.forEach(box => box.classList.toggle('is-visible'));
}

function revealBoxSkillsLanguages() {
  const innerBox = this.querySelectorAll('.box-skills-languages-wrapper');
  const balls = this.querySelectorAll('.bar-ball');
  const barWidth = this.querySelector('.bar').offsetWidth + 20; // 20px to pading z obu stron (10 + 10)
  const ballWidth = 16;
  const [
    ballPhotoshop,
    ballIndesign,
    ballIllustrator,
    ballQuarkXpress,
    balHTML,
    ballCSS,
    ballJS,
    ballOffice
  ] = [...balls];
  console.log(barWidth, barWidth / 3);

  // widthBar + szerokość kulki (16px) daje 100%
  ballPhotoshop.style.transform = `translateX(calc(${barWidth}px - ${ballWidth}px - ${barWidth / 10}px))`;
  ballIndesign.style.transform = `translateX(calc(${barWidth}px - ${ballWidth}px - ${barWidth / 10 * 7}px))`;
  ballIllustrator.style.transform = `translateX(calc(${barWidth}px - ${ballWidth}px - ${barWidth / 10 * 6}px))`;
  ballQuarkXpress.style.transform = `translateX(calc(${barWidth}px - ${ballWidth}px - ${barWidth / 10}px))`;
  balHTML.style.transform = `translateX(calc(${barWidth}px - ${ballWidth}px - ${barWidth / 10 * 4}px))`;
  ballCSS.style.transform = `translateX(calc(${barWidth}px - ${ballWidth}px - ${barWidth / 10 * 3}px))`;
  ballJS.style.transform = `translateX(calc(${barWidth}px - ${ballWidth}px - ${barWidth / 10 * 5}px))`;
  ballOffice.style.transform = `translateX(calc(${barWidth}px - ${ballWidth}px - ${barWidth / 10 * 6}px))`;

  innerBox.forEach(box => box.classList.toggle('is-visible2'));
}

boxes[0].addEventListener('click', revealBoxEduWorkCourses);
boxes[1].addEventListener('click', revealBoxEduWorkCourses);
boxes[2].addEventListener('click', revealBoxSkillsLanguages);
boxes[3].addEventListener('click', revealBoxEduWorkCourses);
boxes[4].addEventListener('click', revealBoxSkillsLanguages);
