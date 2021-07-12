window.onload = function () {
  // 1. Cria o título com id 'title'
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Paleta de Cores';
  h1.id = 'title';
  document.body.prepend(h1);

  // 2 e 3. Adiciona paleta de quatro cores
  const palette = document.createElement('div');
  palette.id = 'color-palette';
  document.body.insertBefore(palette, h1.nextElementSibling);

  const colorPalette = document.querySelector('#color-palette');

  for (let index = 0; index < 4; index += 1) {
    const div = document.createElement('div');
    div.className = 'color';

    colorPalette.appendChild(div);
  }

  const color1 = document.querySelector('#color-palette').firstElementChild;
  const color2 = document.querySelector('#color-palette').children[1];
  const color3 = document.querySelector('#color-palette').children[2];
  const color4 = document.querySelector('#color-palette').lastElementChild;

  color1.style.backgroundColor = 'black';
  color2.style.backgroundColor = 'blue';
  color3.style.backgroundColor = 'yellow';
  color4.style.backgroundColor = 'purple';

  // 4 e 5. Adiciona um quadro de pixels
  const pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  document.body.insertBefore(pixelBoard, palette.nextElementSibling);

  const pixels = document.querySelector('#pixel-board');
  let n = 5;

  for (let index = 0; index < n; index += 1) {
    const div = document.createElement('div');
    pixels.appendChild(div);
  }

  for (let index = 0; index < n; index += 1) {
    for (let index2 = 0; index2 < n; index2 += 1) {
      let pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';

      pixels.children[index].appendChild(pixelDiv);
    }
  }

  // 6. Cor preta inicial
  color1.classList.add('selected');

  // 7. Altera cor selecionada
  let color = color1.style.backgroundColor;

  function addSelected (event) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
    color = event.target.style.backgroundColor;
  }

  color1.addEventListener('click', addSelected);
  color2.addEventListener('click', addSelected);
  color3.addEventListener('click', addSelected);
  color4.addEventListener('click', addSelected);

  // 8. Pinta os pixels com a cor selecionada
  const pixel = document.querySelector('#pixel-board');

  pixel.addEventListener('click', function(event) {
    event.target.style.backgroundColor = color;
  });

  // 9. Cria o botão para limpar os pixels
  const createClearAllBtn = document.createElement('button');
  createClearAllBtn.innerHTML = 'Limpar'
  createClearAllBtn.id = 'clear-board';
  document.body.insertBefore(createClearAllBtn, colorPalette.nextElementSibling);

  const clearBtn = document.querySelector('#clear-board');
  const paintPixels = document.getElementsByClassName('pixel');

  clearBtn.addEventListener('click', function() {
    for (index = 0; index < paintPixels.length; index += 1) {
      paintPixels[index].style.backgroundColor = 'white';
    }
  })

  //10 e 11. Cria um botão que define o número de pixels
  const createInputPixel = document.createElement('input');
  const createInputBtn = document.createElement('button');
  createInputPixel.id = 'board-size';
  createInputPixel.type = 'number';
  createInputPixel.min = 1;
  createInputBtn.id = 'generate-board';
  createInputBtn.innerHTML = 'VQV'
  document.body.insertBefore(createInputPixel, createClearAllBtn.nextElementSibling);
  document.body.insertBefore(createInputBtn, createInputPixel.nextElementSibling);

  const inputBtn = document.querySelector('#generate-board');
  const inputPixel = document.querySelector('#board-size');
  
  inputBtn.addEventListener('click', function boardSize () {
    pixels.innerHTML = '';

    if (!inputPixel.value) {
      window.alert('Board inválido!');
    } else if (inputPixel.value < 5) {
      inputPixel.value = 5;
    } else if (inputPixel.value > 50) {
      inputPixel.value = 50;
    }

    n = inputPixel.value;
    

    for (let index = 0; index < n; index += 1) {
      let div = document.createElement('div');
      pixels.appendChild(div);
    }

    for (let index = 0; index < n; index += 1) {
      for (let index2 = 0; index2 < n; index2 += 1) {
        let pixelDiv = document.createElement('div');
        pixelDiv.className = 'pixel';

        pixels.children[index2].appendChild(pixelDiv);
      }
    }
  })
}