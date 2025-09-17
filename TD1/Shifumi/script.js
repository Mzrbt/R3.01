const buttons = document.querySelectorAll(".button");
let choix = document.getElementById("choix");
let choix_bot = document.getElementById("bot");
let txt = document.getElementById("p");
let res = document.getElementById("resultats");
let liste_res = document.getElementById("liste_resultats");

const possibilites = ["Pierre", "Feuille", "Ciseaux"];

const resultats = {victoires : 0, defaites : 0, nulles :0};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let choix_joueur = button.textContent;
        let bot = possibilites[Math.floor(Math.random() * 3)];

        liste_res.innerHTML = "Victoires : " + resultats.victoires + ", Défaites : " + resultats.defaites + ", Nulles : " + resultats.nulles;

        if (choix_joueur == "Pierre"){
            choix.innerHTML = "Votre choix : Pierre";
            choix_bot.innerHTML = "Choix du bot : " + bot;
        } else if (choix_joueur == "Feuille"){
            choix.innerHTML = "Votre choix : Feuille";
            choix_bot.innerHTML = "Choix du bot : " + bot;
        } else {
            choix.innerHTML = "Votre choix : Ciseaux";
            choix_bot.innerHTML = "Choix du bot : " + bot;
        }

        if (choix_joueur === bot){
            res.innerHTML = "Match nul";
            resultats.nulles += 1;
        } else if ((choix_joueur === "Pierre" && bot === "Ciseaux") || (choix_joueur === "Feuille" && bot === "Pierre") || (choix_joueur === "Ciseaux" && bot === "Feuille")){
            res.innerHTML = "Vous avez gagné !";
            resultats.victoires += 1;
        } else {
            res.innerHTML = "Vous avez perdu...";
            resultats.defaites += 1;
        }

        liste_res.innerHTML = "Victoires : " + resultats.victoires + ", Défaites : " + resultats.defaites + ", Nulles : " + resultats.nulles;

    });
});