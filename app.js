// alert("error")
// prompt("enter your name")

var btnClk=document.querySelector("#btn");
var textArea=document.querySelector("#text");
console.log(btnClk)


btnClk.addEventListener("click", clickhandler)

function clickhandler()
{
    
    console.log("clicked");
    console.log(textArea.value);

}


