var textInput = document.querySelector('#text-area');
var buttonTranslate = document.querySelector('#btn-translate');
var outputDiv = document.querySelector('#output');

var serverLink = "	https://api.funtranslations.com/translate/pirate.json
";

function getTranslation(input) {
    return serverLink + "?" + "text=" + input;
}

function errorHandler(error) {
    alert('There is the problem in the server!!!');
}

function eventHandler() {
    // console.log("working fine.");
    var inputText = textInput.value;

    fetch(getTranslation(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    }).catch(errorHandler);

}

buttonTranslate.addEventListener('click', eventHandler);