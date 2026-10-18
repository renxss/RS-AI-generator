function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = "J’ai voulu ce matin te rapporter des roses";


let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);