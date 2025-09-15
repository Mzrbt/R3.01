/*Exo 1*/
const tempDegCelsius = 80;
const celToFahr = tempDegCelsius * 9/5 + 32;
document.getElementById("text1").textContent = "La température en celsius est de " + tempDegCelsius + " et celle en Fahrenheit est de " + celToFahr; 

/*Exo 2*/
const longueur = 8;
const largeur = 10;
const aire = largeur * longueur;
document.getElementById("text2").textContent = "L'aire du rectangle est le produit de la longueur " + longueur + " et de la largeur " + largeur + " ce qui nous donne une aire de " + aire + " m²"

/*Exo 3*/
const nom = "Langlois"
const prénom = "Marin"
document.getElementById("text3").textContent = prénom + " " + nom;

/*Exo 4*/
const montantHT = 50;
const tauxTVA = 0.2;
const montantTTC = montantHT + (montantHT * (1 - tauxTVA));
document.getElementById("text4").textContent = "Montant HT = " + montantHT + ", taux TVA = " + tauxTVA + " et montant TTC = " + montantTTC

/*Exo 5*/
if (((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true) == true){
    document.getElementById("text5").textContent = "C'est vrai"
}
else {
    document.getElementById("text5").textContent = "C'est faux"
}

/*Exo 6*/
let poidsKG = 80;
let taille = 1.88;
let IMC = (poidsKG / (taille * taille)).toFixed(2);
document.getElementById("text6").textContent = "IMC = " + IMC;