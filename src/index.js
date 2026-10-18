function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 75,
        cursor: "",
    });
}
   

function generatePoem(event) {
    event.preventDefault();

    let apiKey = "abtd48d815a54b190coedf704f30b0e3";
    let prompt = "J’ai voulu ce matin te rapporter des roses";
    let context = "poem";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("form");
poemFormElement.addEventListener("submit", generatePoem);