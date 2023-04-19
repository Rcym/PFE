
// const popUpBackground = document.getElementById("popUpBackground");
// const leftMenu = document.getElementById('leftMenu');
// const imgBtnToogleMenu = document.getElementById('imgBtnToogleMenu');

const addPostBtn = document.querySelector(".addPost");

addPostBtn.addEventListener("click",() => {


})



// filtre select
const filtreBtns = Array.from(document.getElementById("filtreDiv").children);
filtreBtns.shift(); // removing "Filter" text (getting buttons only)
filtreBtns.forEach(filtreBtn => {
    filtreBtn.addEventListener('click', () => {
        filtreBtn.classList.toggle("filterSelected");
    })
})


// fonction qui retourne les filtres utilisés en liste
function getFilters() {
    usedFilters = [];
    filtreBtns.forEach((element) => {
        if (element.classList.contains("filterSelected")) {
            usedFilters.push(element.innerHTML)
        }
    })
    return usedFilters
}




// // Left menu animation + popUpBackgroud function


// function toggleBackground(isBackgroundShown) {
//     // isShown = true => remove background
//     // isShown = false => show background
//     if (isBackgroundShown) {
//         popUpBackground.style.display = "none";
//         popUpBackground.style.pointerEvents = "none";
//     } else {
//         popUpBackground.style.display = "block";
//         popUpBackground.style.pointerEvents = "all";
//     }
// }

// function toogleMenu() {
//     if (leftMenu.classList.contains('leftMenuVisible')) {
//     } else {
//         leftMenu.classList.add('leftMenuVisible');
//         document.addEventListener('click', hideMenu);
//         toggleBackground(false);
//     }
// }

// function hideMenu(e) {
//     if (!leftMenu.contains(e.target) && e.target.id != "imgBtnToogleMenu") {
//         leftMenu.classList.remove('leftMenuVisible');
//         document.removeEventListener('click', hideMenu)
//         toggleBackground(true);
//     }
// }