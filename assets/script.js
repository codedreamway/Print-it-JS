const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var leftArrow = document.querySelector(".arrow_left");
var rightArrow = document.querySelector(".arrow_right")
var imageList = document.querySelectorAll(".banner-img");
var captionList = document.querySelectorAll("#banner p");
var dotList = document.querySelectorAll(".dot");

// Transforme les nœuds NodeList en tableaux
var images = Array.from(imageList);
var captions = Array.from(captionList);
var dots = Array.from(dotList);

// Initialise l'indice de l'image active actuelle à 0
var currentImage = 0;

// Met à jour l'affichage pour l'image active
function updateImage() {
  // Cache toutes les images et les légendes
  images.forEach(function(image) {
    image.style.display = "none";
  });
  captions.forEach(function(caption) {
    caption.style.display = "none";
  });

  // Affiche l'image active et la légende correspondante
  images[currentImage].style.display = "block";
  captions[currentImage].innerHTML = slides[currentImage].tagLine;
  captions[currentImage].style.display = "block";

  // Met à jour l'indicateur de diapositive correspondant
  dots.forEach(function(dot) {
    dot.classList.remove("dot_selected");
  });
  dots[currentImage].classList.add("dot_selected");
}

// Passe à l'image suivante
function nextImage() {
  // Incrémente l'indice de l'image active actuelle
  currentImage++;

  // Si on a atteint la fin de la liste des images, on revient au début
  if (currentImage >= images.length) {
    currentImage = 0;
  }

  // Met à jour l'affichage pour l'image active
  updateImage();
}

// Passe à l'image précédente
function prevImage() {
  // Décrémente l'indice de l'image active actuelle
  currentImage--;

  // Si on a atteint le début de la liste des images, on revient à la fin
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  // Met à jour l'affichage pour l'image active
  updateImage();
}

// Ajoute des écouteurs d'événements aux flèches de gauche et de droite
leftArrow.addEventListener("click", function() {
  // Si on est à la première image et qu'on clique à gauche,
  // on affiche la dernière image et on sélectionne le dernier point
  if (currentImage === 0) {
    currentImage = images.length - 1;
    dots.forEach(function(dot) {
      dot.classList.remove("dot_selected");
    });
    dots[dots.length - 1].classList.add("dot_selected");
  } else {
    // Sinon, on passe simplement à l'image précédente
    currentImage--;
  }

  // Met à jour l'affichage pour l'image active
  updateImage();
});

rightArrow.addEventListener("click", function() {
  // Si on est à la dernière image et qu'on clique à droite,
  // on affiche la première image et on sélectionne le premier point
  if (currentImage === images.length - 1) {
    currentImage = 0;
    dots.forEach(function(dot) {
      dot.classList.remove("dot_selected");
    });
    dots[0].classList.add("dot_selected");
  } else {
    // Sinon, on passe simplement
  }
});
