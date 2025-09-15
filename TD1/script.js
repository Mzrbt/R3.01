/*Exo 1*/
const tempDegCelsius = 80;
const celToFahr = tempDegCelsius * 9/5 + 32;
document.getElementById("text1").textContent = "La température en celsius est de " + tempDegCelsius + " et celle en Fahrenheit est de " + celToFahr; 

/*Exo 2*/
const longueur = 8;
const largeur = 10;
const aire = largeur * longueur;
document.getElementById("text2").textContent = "L'aire du rectangle est le produit de la longueur " + longueur + " et de la largeur " + largeur + " ce qui nous donne une aire de " + aire + " m²"