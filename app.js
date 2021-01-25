// alert("error")
// prompt("enter your name")

var btnClk=document.querySelector("#btn");
var textArea=document.querySelector("#text");
var outputText=document.querySelector("#output");
console.log(btnClk)




btnClk.addEventListener("click", clickhandler)

function clickhandler()
{
    
    // console.log("clicked");
    textArea.value
    outputText.innerText=textArea.value;
}


