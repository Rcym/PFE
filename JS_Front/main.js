
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