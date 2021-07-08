window.onload = function() {

let color1 = document.querySelector('#color-palette').firstElementChild;
let color2 = document.querySelector('#color-palette').children[1];
let color3 = document.querySelector('#color-palette').children[2];
let color4 = document.querySelector('#color-palette').lastElementChild;


color1.style.backgroundColor = 'black';
color2.style.backgroundColor = 'blue';
color3.style.backgroundColor = 'yellow';
color4.style.backgroundColor = 'purple';

color1.classList.add('selected');
}