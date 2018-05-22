/*eslint no-console: "off"*/
const boxes = document.querySelectorAll('.box');
const boxesExpanded = document.querySelectorAll('.box-expanded');
const eduWrappers = document.querySelectorAll('.box-edu-wrapper');

function reavealBox() {
  this.classList.toggle('change');
  boxesExpanded[0].classList.toggle('is-open');
  eduWrappers.forEach(eduWrapper => {
    eduWrapper.classList.toggle('is-visible');
  });
}

boxes.forEach(box => box.addEventListener('click', reavealBox));
