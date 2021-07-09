window.onload = function() {
  // 1. Cria o título com id 'title'
  let h1 = document.createElement('h1');
  h1.innerHTML = 'Paleta de Cores';
  h1.id = 'title';
  document.body.prepend(h1);

  // 2 e 3. Adiciona paleta de quatro cores
  let palette = document.createElement('div');
  palette.id = 'color-palette';
  document.body.insertBefore(palette, h1.nextElementSibling);

  let colorPalette = document.querySelector('#color-palette');

  for (let index = 0; index < 4; index += 1) {
    let div = document.createElement('div');
    div.className = 'color';

    colorPalette.appendChild(div);
  }

  let color1 = document.querySelector('#color-palette').firstElementChild;
  let color2 = document.querySelector('#color-palette').children[1];
  let color3 = document.querySelector('#color-palette').children[2];
  let color4 = document.querySelector('#color-palette').lastElementChild;

  color1.style.backgroundColor = 'black';
  color2.style.backgroundColor = 'blue';
  color3.style.backgroundColor = 'yellow';
  color4.style.backgroundColor = 'purple';

  // 4 e 5. Adiciona um quadro de pixels
  let pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  document.body.insertBefore(pixelBoard, palette.nextElementSibling);

  let pixels = document.querySelector('#pixel-board');
  let n = 5;

  for (let index = 0; index < n; index += 1) {
    let div = document.createElement('div');
    pixels.appendChild(div);
    }

    let pixelsChildren = pixels.children;
    console.log(pixelsChildren)

  for (let index = 0; index < n; index += 1) {
    for (let index = 0; index < n; index += 1) {
    let pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';

    pixelsChildren[index].appendChild(pixelDiv);
    }
  }

  // 6. Cor preta inicial
  color1.classList.add('selected');

  // 7. Altera cor selecionada
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

  // 8. Pinta os pixels com a cor selecionada
  let pixel = document.querySelector('#pixel-board');

  pixel.addEventListener('click', function(event) {
  event.target.style.backgroundColor = color;
  });

  // 9. Cria o botão para limpar os pixels
  let button = document.createElement('button');
  button.innerHTML = 'Limpar'
  button.id = 'clear-board';
  document.body.insertBefore(button, colorPalette.nextElementSibling);

  let btn = document.querySelector('#clear-board');
  let paintPixels = document.getElementsByClassName('pixel');

  btn.addEventListener('click', function() {
    for (index = 0; index < paintPixels.length; index += 1) {
      paintPixels[index].style.backgroundColor = 'white';
    }
  })
}