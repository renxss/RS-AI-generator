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
    let userInstructionElement = document.querySelector("#user-instruction");

    let apiKey = "abtd48d815a54b190coedf704f30b0e3";
    let prompt = `Generate a French poem about ${userInstructionElement.value}`;
    let context =
      "user instructions: You are a romantic poet that loves writing short poems up to 4 sentences, please follow the user instructions, sign the poem at the end with element <strong>Shecodes AI</strong> in a seperate line below";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class= "generating"> Generating a French poem about ${userInstructionElement.value}</div>`;

    console.log("Generating a French poem ");
    console.log(`Prompt:${prompt}`);
    console.log(`Context:${context}`);

    axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("form");
poemFormElement.addEventListener("submit", generatePoem);