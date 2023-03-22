
// Profile SubMenu Handler

const profileSubMenu = document.querySelector(".profileSubMenu")
const profileSubMenuBtn = document.getElementById("profileSubMenuBtn")

profileSubMenuBtn.addEventListener("click", () => {
    profileSubMenu.classList.toggle("profileSubMenuSHOWN")
})