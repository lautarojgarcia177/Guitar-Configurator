let bodyImg = document.getElementById('body-img');
let neckImg = document.getElementById('neck-img');

// let bodyColorModal = document.getElementById('bodyColorModal');

function bodyColor(color) {
  bodyImg.src = "./assets/body-" + color + ".png";
  $('#bodyColorModal').modal('hide');
}

function fretboardWood(wood) {
  neckImg.src = "./assets/neck-" + wood + ".png";
  $('#fretboardWoodModal').modal('hide');
}