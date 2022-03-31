
function button1Clicked() {
  document.getElementById('button-1').classList.toggle('was-clicked');

}

function nameOver() {
  document.getElementById('name').classList.toggle('was-hovered');
}

function WindowLoaded () {
  console.log('loaded');
  document.getElementById('button-1').addEventListener('click', button1Clicked);
  document.getElementById('name').addEventListener('mouseover', nameOver);
}

/* mouseover */

window.onload = WindowLoaded;
