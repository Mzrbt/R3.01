var button = document.querySelector("button");
var txt = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
    if(button.value == "Pierre"){
        button.value = "Ciseau";
        txt.textContent = "Ciseau";
    } else {
        button.value = "Pierre";
        txt.textContent = "Pierre";
    }
}