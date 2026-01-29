const card=document.querySelector(".card")

console.log(card)


function show() {
    if (card.classList.contains("show")){
        card.classList.remove("show")
    } else{
        card.classList.add("show")
    }
}

// function show(){
//     if (card.getAttribute("class" )=="show"){ card.removeAttribute("class")

//     } else{card.setAttribute("class", "show")}
// }

// function show(){
//     card.classList.toggle("show")
// }
