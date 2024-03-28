// api : https://api.adviceslip.com/advice

let adviceId = document.getElementById("adviceId");
let adviceText = document.getElementById("adviceText");
let btn = document.getElementById("button")


URL_API = "https://api.adviceslip.com/advice";



function getAdvice(){

fetch(URL_API)
.then((response => response.json()))
.then((data) => {
    console.log(data)

adviceId.innerText = " ADVICE # "   + data.slip.id
adviceText.innerText =  ' " ' +  data.slip.advice + ' " '
 
 // Modifier l'apparence des éléments

 adviceId.style.color = " rgb(8, 235, 129)";
 adviceId.style.fontSize = "12px";
 adviceId.style.fontWeight = "lighter";


 // Modifier la couleur du texte de l'ID
 adviceText.style.color = "white";
 adviceText.style.fontWeight = "lighter"; 
 adviceText.style.fontSize = "20px";
 adviceText.style.textAlign = "center";
 adviceText.style.paddingBottom = "30px"
 adviceText.style.borderBottom = "2px solid white"
})

}

window.addEventListener('load',getAdvice);
btn.addEventListener("click",getAdvice)


