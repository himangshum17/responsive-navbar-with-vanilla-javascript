const menuBtn = document.querySelector(".menu-button button");
let menuIcon = document.querySelector(".menu-button button img");
const naviGation = document.querySelector(".navigation");

function openNavigation() {
    menuBtn.addEventListener("click", function () {
        this.classList.toggle("active");
        if(menuBtn.classList.contains("active")){
            menuIcon.src = "./icon/x.svg";
        }
        else{
            menuIcon.src = "./icon/menu.svg";
        }
        naviGation.classList.toggle("active"); 
    });
}

openNavigation();