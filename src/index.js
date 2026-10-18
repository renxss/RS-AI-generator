function generatePoem(event) {
    event.preventDefault();


    new Typewriter("#poem", {
        strings: "J’ai voulu ce matin te rapporter des roses",
        autoStart: true,
        delay: 5,
        cursor: "",
    });
}

let poemFormElement = document.querySelector("form");
poemFormElement.addEventListener("submit", generatePoem);