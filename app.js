// alert("error")
// prompt("enter your name")

var btnClk=document.querySelector("#btn");
console.log(btnClk)

btnClk.addEventListener("click", clickhandler)

function clickhandler()
{
    console.log("clicked");
}