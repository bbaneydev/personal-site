const button = document.getElementById("button")

button.addEventListener("mouseenter", function(e){
    button.style.width = "195px"
    button.style.fontSize = "24px"
})

button.addEventListener("mouseleave", function(e){
    button.style.fontSize = "22px"
    button.style.width = "185px"
})