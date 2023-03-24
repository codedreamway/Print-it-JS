const slides = [{
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
]
console.log(slides);

var tagLine = document.querySelector('#banner p');
console.log(tagLine);
var img = document.querySelector(".banner-img");
console.log(img);




var leftArrow = document.querySelector('.arrow_left');
console.log(leftArrow);

leftArrow.addEventListener('click', leftClick);


function leftClick() {
  dot[count].classList.remove('dot_selected');

  if (count > 0) {
    count--;

  } else {
    count = nombreBullet - 1
  }

  var recuperationImage = slides[count].image;
  console.log(recuperationImage);

  var recuperationTagline = slides[count].tagLine;
  console.log(recuperationTagline);

  var changerImage = img.src = "./assets/images/slideshow/" + recuperationImage;
  console.log(changerImage);

  var changerTexte = tagLine.innerHTML = recuperationTagline;
  console.log(changerTexte);


  dot[count].classList.add('dot_selected');


};


//===============


var rightArrow = document.querySelector('.arrow_right');
console.log(rightArrow);

rightArrow.addEventListener('click', rightClick);

function rightClick() {
  dot[count].classList.remove('dot_selected');

  if (count < nombreBullet - 1) {
    count++;
  } else {
    count = 0
  }

  var recuperationImage = slides[count].image;
  console.log(recuperationImage);

  var recuperationTagline = slides[count].tagLine;
  console.log(recuperationTagline);

  var changerImage = img.src = "./assets/images/slideshow/" + recuperationImage;
  console.log(changerImage);

  var changerTexte = tagLine.innerHTML = recuperationTagline;
  console.log(changerTexte);

  dot[count].classList.add('dot_selected');
};











// rappeler mes bullets

var dot = document.querySelectorAll('.dot')
console.log(dot);

// Déterminer la longueur des bullets
var nombreBullet = dot.length;
console.log(nombreBullet);

// initialiser la valeur de la position   à Zéro
let count = 0;