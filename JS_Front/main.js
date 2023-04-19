
// Profile SubMenu Handler

const profileSubMenu = document.querySelector(".profileSubMenu")
const profileSubMenuBtn = document.getElementById("profileSubMenuBtn")

profileSubMenuBtn.addEventListener("click", () => {
    profileSubMenu.classList.toggle("profileSubMenuSHOWN")
})




// Module Select (in menu)
const modulesBtns = document.querySelectorAll('.moduleElement');
modulesBtns.forEach(moduleBtn => {
    moduleBtn.addEventListener('click', () => {
        modulesBtns.forEach(moduleBtn => {moduleBtn.classList.remove("selected_module")})
        moduleBtn.classList.add("selected_module")
    })
})




const popUpBackground = document.getElementById("popUpBackground");
const leftMenu = document.getElementById('leftMenu');
const imgBtnToogleMenu = document.getElementById('imgBtnToogleMenu');

function toggleBackground(isBackgroundShown) {
    // isShown = true => remove background
    // isShown = false => show background
    if (isBackgroundShown) {
        popUpBackground.style.display = "none";
        popUpBackground.style.pointerEvents = "none";
    } else {
        popUpBackground.style.display = "block";
        popUpBackground.style.pointerEvents = "all";
    }
}

function toogleMenu() {
    if (leftMenu.classList.contains('leftMenuVisible')) {
    } else {
        leftMenu.classList.add('leftMenuVisible');
        document.addEventListener('click', hideMenu);
        toggleBackground(false);
    }
}

function hideMenu(e) {
    if (!leftMenu.contains(e.target) && e.target.id != "imgBtnToogleMenu") {
        leftMenu.classList.remove('leftMenuVisible');
        document.removeEventListener('click', hideMenu)
        toggleBackground(true);
    }
}