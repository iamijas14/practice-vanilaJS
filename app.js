// alert("error")
// prompt("enter your name")

var btnClk=document.querySelector("#btn");
var textArea=document.querySelector("#text");
var outputText=document.querySelector("#output");
// console.log(btnClk)

var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getUrl(text)
{
    return serverUrl + "?" + "text=" +text;
}


function clickhandler()
{

    var inputText=textArea.value;
    fetch(getUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText= json.contents.translated;
        outputText.innerText=translatedText;
    })
    
    // // console.log("clicked");
    // console.log(textArea.value)
    // outputText.innerText=textArea.value;
}


btnClk.addEventListener("click", clickhandler)