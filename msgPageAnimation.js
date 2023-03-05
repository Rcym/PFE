
const moduleElements = document.querySelectorAll(".TPTDmoduleSection")

moduleElements.forEach(element => {
    console.log(element.querySelector(".arrow"))
    //element.querySelector(".arrow").addEventListener("click", () => {
    element.addEventListener("click", () => {

        element.classList.toggle("closed")
        element.children[2].classList.toggle("animateFadeIn")
        element.children[3].classList.toggle("animateFadeIn")
        element.children[4].classList.toggle("animateFadeIn")

    })
    
})
