const colNumber = 6;
const rowNumber = 6;

const box = document.querySelector('.box');

for (let index = 0; index < rowNumber; index++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let i = 0; i < colNumber; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    generateImages()
      .then((data) => data.json())
      .then((dog) => {
        cell.style.backgroundImage = `url(${dog.message})`;
      });

    row.appendChild(cell);
  }
  box.appendChild(row);
}

function generateImages() {
  return fetch('https://dog.ceo/api/breeds/image/random');
  // .then((data) =>
  //   console.log(data),
  // );
}

{
}
