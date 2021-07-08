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

  let color = color1.style.backgroundColor;

  function addSelected(event) {
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
    color = event.target.style.backgroundColor;
  }

  color1.addEventListener('click', addSelected);
  color2.addEventListener('click', addSelected);
  color3.addEventListener('click', addSelected);
  color4.addEventListener('click', addSelected);

  let pixel = document.querySelector('#pixel-board');

  pixel.addEventListener('click', function(event) {
  event.target.style.backgroundColor = color;
  });
  
  let btn = document.querySelector('#clear-board');
  let pixels = document.getElementsByClassName('pixel');

  btn.addEventListener('click', function() {
    for (index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  })

}