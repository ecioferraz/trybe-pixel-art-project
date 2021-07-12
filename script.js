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

  const colors = document.querySelectorAll('.color');

  colors[0].style.backgroundColor = 'black';

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
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';

      pixels.children[index].appendChild(pixelDiv);
    }
  }

  // 6. Cor preta inicial
  colors[0].classList.add('selected');

  // 7. Altera cor selecionada
  let color = colors[0].style.backgroundColor;

  function addSelected(event) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
    color = event.target.style.backgroundColor;
  }

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', addSelected);
  }

  // 8. Pinta os pixels com a cor selecionada
  const pixel = document.querySelector('#pixel-board');

  pixel.addEventListener('click', function (event) {
    event.target.style.backgroundColor = color;
  });

  // 9. Cria o botão para limpar os pixels
  const createClearAllBtn = document.createElement('button');
  createClearAllBtn.innerHTML = 'Limpar';
  createClearAllBtn.id = 'clear-board';
  document.body.insertBefore(createClearAllBtn, colorPalette.nextElementSibling);

  const clearBtn = document.querySelector('#clear-board');
  const paintPixels = document.getElementsByClassName('pixel');

  clearBtn.addEventListener('click', function () {
    for (let index = 0; index < paintPixels.length; index += 1) {
      paintPixels[index].style.backgroundColor = 'white';
    }
  });

  // 10 e 11. Cria um botão que define o número de pixels
  const createInputPixel = document.createElement('input');
  const createInputBtn = document.createElement('button');
  createInputPixel.id = 'board-size';
  createInputPixel.type = 'number';
  createInputPixel.min = 1;
  createInputBtn.id = 'generate-board';
  createInputBtn.innerHTML = 'VQV';
  document.body.insertBefore(createInputPixel, createClearAllBtn.nextElementSibling);
  document.body.insertBefore(createInputBtn, createInputPixel.nextElementSibling);

  const inputBtn = document.querySelector('#generate-board');
  const inputPixel = document.querySelector('#board-size');
  inputBtn.addEventListener('click', function boardSize() {
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
      const div = document.createElement('div');
      pixels.appendChild(div);
    }

    for (let index = 0; index < n; index += 1) {
      for (let index2 = 0; index2 < n; index2 += 1) {
        const pixelDiv = document.createElement('div');
        pixelDiv.className = 'pixel';

        pixels.children[index2].appendChild(pixelDiv);
      }
    }
  });

  // 12. Cores aleatórias
  function randomColors() {
    const randomColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    return randomColor;
  }

  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = randomColors();
  }
};