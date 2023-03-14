
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


// making the message scroll to bottom
const msgContainerDiv = document.querySelector(".msgContainer")
console.log(msgContainerDiv)
msgContainerDiv.scrollTop = msgContainerDiv.scrollHeight - msgContainerDiv.offsetHeight;
//msgContainerDiv.scroll(0,msgContainerDiv.offsetHight)




const sendBtn = document.getElementById("sendBtn")


sendBtn.addEventListener("click", () => {
    // getting the test to write
    let textEntry = document.getElementById("textEntry").value
    if (textEntry == "") {
        return
    }
    
    // removing the old vide message
    let msgLineVide = document.getElementsByClassName("msgLineVide")[0]
    msgContainerDiv.removeChild(msgLineVide)
    
    // getting previous msg
    //let PreviousMsg = msgContainerDiv.lastChild
    let PreviousMsg = document.querySelector(".msgLine:last-child")

    
    if (PreviousMsg.classList.contains("ownMsgLine")) {
        // creating the msg Text Div
        newMsg = document.createElement("p")
        newMsg.innerHTML = textEntry
        msgTxtDiv.appendChild(newMsg)

    } else {
        // creating the msgLine Div
        msgLineDiv = document.createElement("div")
        msgLineDiv.classList.add("msgLine")
        msgLineDiv.classList.add("ownMsgLine")
        msgContainerDiv.appendChild(msgLineDiv)
        
        // creating the icon
        msgIcon = document.createElement("div")
        msgIcon.classList.add("msgerIcon")
        msgLineDiv.appendChild(msgIcon)
        
        // creating the msg Text Div
        msgTxtDiv = document.createElement("div")
        msgTxtDiv.classList.add("msgTxt")
        msgLineDiv.appendChild(msgTxtDiv)
        
        // creating the msg Text Div
        newMsg = document.createElement("p")
        newMsg.innerHTML = textEntry
        msgTxtDiv.appendChild(newMsg)
    }


    // adding the empty vide message after the new msg
    msgLineVide = document.createElement("div")
    msgLineVide.classList.add("msgLineVide")
    msgContainerDiv.appendChild(msgLineVide)

    msgContainerDiv.scrollTop = msgContainerDiv.scrollHeight - msgContainerDiv.offsetHeight;

    // suprimer le text écrit
    document.getElementById("textEntry").value = null
    
    console.log("msg addeddd")
})







// test pour envoyer du coté prof

const PJbtn = document.getElementById("PJbtn")

PJbtn.addEventListener("click", () => {
    // getting the test to write
    let textEntry = document.getElementById("textEntry").value
    if (textEntry == "") {
        return
    }
    
    // removing the old vide message
    let msgLineVide = document.getElementsByClassName("msgLineVide")[0]
    msgContainerDiv.removeChild(msgLineVide)
    
    // getting previous msg
    let PreviousMsg = document.querySelector(".msgLine:last-child")
    console.log(PreviousMsg)
    
    if (PreviousMsg.classList.contains("ownMsgLine")) {
        // creating the msg Text Div
        newMsg = document.createElement("p")
        newMsg.innerHTML = textEntry
        msgTxtDiv.appendChild(newMsg)

    } else {
        // creating the msgLine Div
        msgLineDiv = document.createElement("div")
        msgLineDiv.classList.add("msgLine")
        msgContainerDiv.appendChild(msgLineDiv)
        
        // creating the icon
        msgIcon = document.createElement("div")
        msgIcon.classList.add("msgerIcon")
        msgLineDiv.appendChild(msgIcon)
        
        // creating the msg Text Div
        msgTxtDiv = document.createElement("div")
        msgTxtDiv.classList.add("msgTxt")
        msgLineDiv.appendChild(msgTxtDiv)
        
        // creating the msg Text Div
        newMsg = document.createElement("p")
        newMsg.innerHTML = textEntry
        msgTxtDiv.appendChild(newMsg)
    }


    // adding the empty vide message after the new msg
    msgLineVide = document.createElement("div")
    msgLineVide.classList.add("msgLineVide")
    msgContainerDiv.appendChild(msgLineVide)

    msgContainerDiv.scrollTop = msgContainerDiv.scrollHeight - msgContainerDiv.offsetHeight;

    // suprimer le text écrit
    document.getElementById("textEntry").value = null
})