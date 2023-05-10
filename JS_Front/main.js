
// Profile SubMenu Handler

const profileDiv = document.querySelector(".profileDiv")
const profileSubMenuBtn = document.querySelector(".profilePicDiv")

profileSubMenuBtn.addEventListener("click", showProfileSubMenu)

async function showProfileSubMenu() {
    profileSubMenuDiv = document.createElement('div');
    profileSubMenuDiv.innerHTML = `
                <a href="#"><p>Espace Personnel</p></a>
                <a href="#"><p>Messagerie</p></a>
                <a href="#"><p>Emploie du temps</p></a>
                <a href="#"><p>Délibération</p></a>
                <div class="delimiteur"></div>
                <a href="#" onclick="showParametres()"><p>Parametres</p></a>
                <a href="#"><p>se déconecter</p></a>`;
    document.body.appendChild(profileSubMenuDiv)
    profileSubMenuDiv.classList.add('profileSubMenu');
    
    toggleBackground(false)
    await new Promise(r => setTimeout(r,10));
    profileSubMenuDiv.classList.add('profileSubMenuSHOWN');

    document.addEventListener('click', hideProfileSubMenu);

}

async function hideProfileSubMenu(e) {
    if (!profileSubMenuDiv.contains(e.target) && e.target != profileSubMenuBtn) {
        profileSubMenuDiv.classList.remove('profileSubMenuSHOWN');
        document.removeEventListener('click', hideProfileSubMenu)
        await new Promise(r => setTimeout(r, 300))
        profileSubMenuDiv.remove();
        toggleBackground(true);
    }
}





// Module Select (in menu)
const modulesBtns = document.querySelectorAll('.moduleElement');
modulesBtns.forEach(moduleBtn => {
    moduleBtn.addEventListener('click', () => {
        modulesBtns.forEach(moduleBtn => {moduleBtn.classList.remove("selected_module")})
        moduleBtn.classList.add("selected_module")
    })
})




// Toggle Background

const leftMenu = document.getElementById('leftMenu');
const imgBtnToogleMenu = document.getElementById('imgBtnToogleMenu');
// const popUpBackground = document.getElementById("popUpBackground");
var numberOfPopUps = 0;

function toggleBackground(isBackgroundShown) {
    // isShown = true => remove background
    // isShown = false => show background
    if (isBackgroundShown) {
        numberOfPopUps -= 1;
        if (numberOfPopUps == 0) {
            popUpBackground.style.display = "none";
            popUpBackground.style.pointerEvents = "none";
        }
    } else {
        numberOfPopUps += 1;
        popUpBackground.style.display = "block";
        popUpBackground.style.pointerEvents = "all";
    }
};



// Toggle Menu

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






// params menu

const parametresDiv = document.getElementById('parametresDiv');
parametresDiv.addEventListener('click', showParametres);



async function showParametres() {
    let parametresPopUp = document.createElement('div')
    parametresPopUp.innerHTML = `
    
        <div class="popUpTop">
            <h3>Parametres</h3>
            <button onclick="hideParametres()">X</button>
        </div>
        <!-- <div class="parametresBodySplit">
            <div class="paramCategories">
                <button>General</button>
                <button>Affichage</button>
            </div>
            <div class="paramCore">

            </div>
        </div> -->
        <div class="parametresBody">
            <h3>Parametres généraux</h3>
            <div class="paramElement">
                <p>- Rester connecter</p>
                <input type="checkbox" id="resterConnecterCheckBox">
            </div>
            <div class="ParamSeparateur"></div>
            <h3>Affichage</h3>
            <div class="paramElement">
                <p>- Theme</p>
                <div class="themeSelect">
                    <button class="themeBtn" onclick="selectTheme('0')">Foncé</button>
                    <button class="themeBtn selectedTheme" onclick="selectTheme('1')">Mixte</button>
                    <button class="themeBtn" onclick="selectTheme('2')">Claire</button>
                </div>
            </div>
            <div class="paramElement">
                <p>- Bordures</p>
                <input type="range" name="" id="borderRadiusScale" min="0" max="20" oninput="updateBorderRadius(event)">
            </div>
            <div class="paramElement">
                <button id="resetParamBtn" onclick='resetParametres()'>Parametres par défaut</button>
            </div>
        </div>
    `
    document.body.appendChild(parametresPopUp);
    parametresPopUp.classList.add("popUp");
    parametresPopUp.classList.add("parametresPopup");
    await new Promise(r => setTimeout(r, 10));
    parametresPopUp.classList.add("popUpVisible");
    toggleBackground(false);
}

async function hideParametres() {
    let parametresPopUp = document.querySelector('.popUpVisible');
    parametresPopUp.classList.remove("popUpVisible");
    await new Promise(r => setTimeout(r,100));
    parametresPopUp.remove();
    toggleBackground(true);
}

var cssRoot = document.querySelector(':root');

function selectTheme(themeIndex) {
    // changement sur l'interface
    let themeBtns = document.querySelectorAll('.themeBtn');
    themeBtns.forEach(element => {
        element.classList.remove('selectedTheme');
    })
    themeBtns[themeIndex].classList.add('selectedTheme');

    // changement theme
    if (themeIndex == 0) {
        cssRoot.style.setProperty('--background_Light', '#434656');
        cssRoot.style.setProperty('--LeftMenuBackground', '#505366');
        cssRoot.style.setProperty('--Top', 'var(--accent_Light)');

        cssRoot.style.setProperty("--textColorPureWhite", 'black');
        cssRoot.style.setProperty("--textColorPureBlack", 'white');
        cssRoot.style.setProperty("--textColorBlack", 'white');
        cssRoot.style.setProperty("--textColorWhite", '#2f3854');
        cssRoot.style.setProperty("--textColorMidWhite", 'rgba(0, 0 ,0 ,0.5)');
        cssRoot.style.setProperty("--textColorMidBlack", 'rgba(255, 255 ,255 ,0.5)');

        cssRoot.style.setProperty("--NeutralBackground", 'rgba(131, 156, 236, 0.3)');
        cssRoot.style.setProperty("--neutralBackground_ontTOP", 'rgba(255, 255 ,255 ,0.1)');

        cssRoot.style.setProperty("--important", 'var(--accent_Lighter)');
        cssRoot.style.setProperty("--important_Low", 'var(--accent_Lighter_05)');
        
    } else if (themeIndex == 1) {
        cssRoot.style.setProperty('--background_Light', 'rgb(241, 241, 241)');
        cssRoot.style.setProperty('--LeftMenuBackground', '#434656');
        cssRoot.style.setProperty('--Top', 'var(--LeftMenuBackground)');

        cssRoot.style.setProperty("--textColorPureWhite", 'white');
        cssRoot.style.setProperty("--textColorPureBlack", 'black');
        cssRoot.style.setProperty("--textColorBlack", '#2f3854');
        cssRoot.style.setProperty("--textColorWhite", 'white');
        cssRoot.style.setProperty("--textColorMidWhite", 'rgba(255, 255 ,255 ,0.5)');
        cssRoot.style.setProperty("--textColorMidBlack", 'rgba(0, 0 ,0 ,0.5)');

        cssRoot.style.setProperty("--NeutralBackground", 'var(--accent_Lighter_015)');
        cssRoot.style.setProperty("--neutralBackground_ontTOP", 'var(--accent_Light_01)');

        cssRoot.style.setProperty("--important", 'var(--accent_Light)');
        cssRoot.style.setProperty("--important_Low", 'var(--accent_Light_05)');
    }
}

function updateBorderRadius(e) {
    cssRoot.style.setProperty('--common_border_radius', e.target.value + "px");
}

function resetParametres() {
    cssRoot.style.setProperty('--common_border_radius', "10px");
    selectTheme("1");
    hideParametres();
}